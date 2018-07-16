const Schema = require('mongoose').Schema


const carritoSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  recipes: [
    {type: Schema.Types.ObjectId, ref: "Recipe"}
  ]
},{
 timestamps:{
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})


module.exports = require('mongoose').model('Carrito', carritoSchema);