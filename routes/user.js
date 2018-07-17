const express = require('express');
const router  = express.Router();
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const uploadCloud = require('../helpers/cloudinary');

function isAuthenticated(req,res,next){
 if(req.isAuthenticated()){
   return next()
 } else {
   res.redirect('/login');
 }
}

function isLoggedIn(req,res,next){
 if(!req.user){
   res.redirect('/login')
 }else{
   next();
 }
}

router.get('/', isLoggedIn, (req,res,next)=>{
 res.render('user/profile', req.user);
})

router.get('/perfil/:username',(req,res,next)=>{
  User.findById(req.user.id)
  .populate('recetas', "nombre")
  .then(user=>{
    res.render('user/personal', user);
  })
})

router.post('/recetas', (req,res,next)=>{
  Recipe.find({ nombre: { $regex:req.body.nombre, $options: 'i' } })
  .then(recipe=>{
    res.render('user/recetas', {recipe})
  })
  .catch(e=>next(e));
})

router.get('/recetas/:id', (req,res,next) =>{
  Recipe.findById(req.params.id)
  .then(recipe => {
    
    res.render('user/recetaInd', recipe)
  })
  .catch(e => next(e));
})

router.get('/carrito', (req,res, next)=>{
  res.render('user/carrito')
})

router.get('/crearReceta', (req,res,next)=>{
  res.render('user/recetaForm')
})

router.post('/crearReceta', uploadCloud.single('photo'), (req,res,next)=>{
  req.body.ing= []
  ingredientes = req.body.ingredientes
  req.body.ing.push(ingredientes)
  req.body.photoURL = req.file.url
  req.body.usuario = req.user
  Recipe.create(req.body)
  .then(recipe=>{
  User.findById(req.user.id)
  .then(user=>{
    user.recipe = recipe.id
    console.log(recipe.id)
  })
  res.redirect('/profile');
})
.catch(e=>next(e));
})


module.exports = router;