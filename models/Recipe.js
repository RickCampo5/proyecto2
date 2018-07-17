const Schema = require('mongoose').Schema


const recipeSchema = new Schema({
  photoURL: String,
  nombre: String,
  ingredientes:  [String],
  categoria: {
    type: String,
    enum: ['postre','ensalada', 'platoFuerte']
  },
  preparacion: String,
  usuario: {
    type: Schema.Types.ObjectId,
    ref:"User"
  }
},{
 timestamps:{
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})

module.exports = require('mongoose').model('Recipe', recipeSchema);