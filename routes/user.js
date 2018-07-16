const express = require('express');
const router  = express.Router();
const Recipe = require('../models/Recipe')

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
 res.render('user/profile');
})

router.post('/recetas', (req,res,next)=>{
  Recipe.find({ nombre: { $regex:req.body.nombre, $options: 'i' } })
  .then(recipe=>{
    res.render('user/recetas', {recipe})
  })
  .catch(e=>next(e));
})

router.get('/recetas/:id', (req,res,next) =>{
  recipe=[];
  req.app.locals.recipe = recipe;
  Recipe.findById(req.params.id)
  .then(recipe => {
    res.render('user/recetaInd', recipe)
  })
  .catch(e => next(e));
})

router.get('/carrito', (req,res, next)=>{
  Recipe.findById(req.params.id)
})

module.exports = router;