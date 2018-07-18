const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const multer = require('multer');
const upload = multer({dest: './public/assets'});
const uploadCloud = require('../helpers/cloudinary');
const Carrito = require('../models/Carrito');

function isAuthenticated(req,res,next){
 if(req.isAuthenticated()){
   return next()
 } else {
   res.redirect('/login');
 }
}

function isLoggedIn(req,res,next){
 if(req.session.currentUser){
   res.redirect('/private')
 }else{
   next();
 }
}

router.get('/signup', (req,res,next)=>{
 res.render('auth/signup')
});

router.post('/signup', (req,res,next)=>{
 if(req.body.password !== req.body.password2){
     req.body.err = "Tu password no coincide"
     res.render('auth/signup', req.body)
 }
 User.register(req.body, req.body.password)
 .then(user=>{
   req.body.user = user.id;
   Carrito.create(req.body);
     console.log("Entraste")
     res.redirect('/login')
 })
 .catch(e=>{
     req.body.err = errDict[e.name];
     res.render('auth/signup', req.body)
 });
});

router.get('/login', isLoggedIn, (req,res)=>{
 res.render('auth/login')
})

router.post('/login', passport.authenticate('local'), (req,res,next)=>{
 req.app.locals.user = req.user;
 res.redirect('/profile')
})

router.get('/logout', (req,res,next)=>{
 req.logOut();
 res.redirect('/login');
});



module.exports = router;