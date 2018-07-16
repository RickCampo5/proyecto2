const Schema = require('mongoose').Schema


const tiendaSchema = new Schema({
  // logoURL: String,
  nombre: String,
  ubicacion: {
    type: {
      type: String,
      default: "Point",
      address: String,
      coordinates: [{type: Number}]
    }
  }  
},{
 timestamps:{
   createdAt: 'created_at',
   updatedAt: 'updated_at'
 }
})

module.exports = require('mongoose').model('Tienda', tiendaSchema);