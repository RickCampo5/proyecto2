const Schema = require('mongoose').Schema


const recipeSchema = new Schema({
  photoURL: String,
  nombre: String,
  ingredientes:  [{qty: String, ingredientName: String}],
  categoria: {
    type: String,
    enum: ['postre','ensalada', 'platoFuerte']
  },
  preparacion: String
},{
 timestamps:{
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})

module.exports = require('mongoose').model('Recipe', recipeSchema);