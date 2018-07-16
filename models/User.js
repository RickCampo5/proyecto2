const Schema = require('mongoose').Schema
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
 username: String,
 // password: String,
 email: String,
 profile: {
   type: Schema.Types.ObjectId,
   ref: 'User'
 },
 recetas: [
   {
     type:Schema.Types.ObjectId,
     ref: 'Recipe'
   }
],
carrito: [
  {type: Schema.Types.ObjectId,
    ref:'Carrito'
  }]
},{
 timestamps:{
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})
module.exports = require('mongoose').model('User', userSchema);