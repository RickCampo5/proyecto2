const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const dbRecipe = 'proyecto2';
mongoose.connect(`mongodb://localhost:27017/${dbRecipe}`);
const recipes = [
  {
    photoURL: 'https://cdn.kiwilimon.com/recetaimagen/27113/th5-320x213-25233.jpg',
     nombre: 'Filete de Pescado en Salsa de Elote y Cebollín',
     ingredientes:  [
       {qty: '5', ingredientName: 'piezas de filete de pescado'},
       {qty: '2', ingredientName: 'pizcas de sal'},
       {qty: '5', ingredientName: 'cucharadas de harina'},
      {qty: '3', ingredientName: 'cucharadas de epazote finamente picado'},
      {qty: '7', ingredientName: 'cucharadas de margarina'},
      {qty: '2', ingredientName: 'piezas de chile serrano finamente picado'},
      {qty: '1', ingredientName: 'lata de crema de elote Campbell´s®'},
      {qty: '4', ingredientName: 'cucharaditas de cebollín finamente picado'},
      {qty: '5', ingredientName: 'piezas de tortillas de harina horneadas'},
      {qty: '1/2', ingredientName: 'taza agua'},
       ],
     categoria: ['platoFuerte'],
     preparacion: "Sazona los filetes de pescado, mezcla la harina con el epazote. Enharina los filetes de pescado. Calienta la margarina en una sartén mediano a fuego medio y fríe los filetes uno a uno por ambos lados hasta que estén doraditos y cocidos por 10 minutos. Reserva Calienta en una ollita a fuego medio la margarina restante y fríe un poco el chile serrano por 1 minuto. Agrega la crema de elote más ½ lata de agua y cuece a fuego bajo por 10 minutos. Reserva. Coloca una tortilla de harina horneada en un plato extendido, sobre esta un filete de pescado y cubre con la crema de elote. Espolvorea con cebollín finamente picado"
  },
  {
    photoURL:"https://cdn.kiwilimon.com/recetaimagen/27112/25230.jpg",
    nombre: 'Carne de res en salsa poblana',
     ingredientes:  [
       {qty: '3', ingredientName: 'cucharaditas de aceite'},
      {qty: '1/2', ingredientName: 'pieza de cebolla finamente picada'},
      {qty: '1', ingredientName: 'diente de ajo finamente picado'},
      {qty: '3', ingredientName: 'tazas de filete de res cortado en cubitos'},
      {qty: '2', ingredientName: 'tazas de calabaza cortada en cubitos'},
      {qty: '2', ingredientName: 'latas de Crema de chile poblano Campbell´s®'},
      {qty: '3', ingredientName: 'cucharadas de perejil'},
      {qty: '1', ingredientName: 'taza de agua'}
       ],
     categoria: ['platoFuerte'],
     preparacion: "Calienta el aceite en una sartén a fuego medio, agrega la cebolla, el ajo y fríe por 2 minutos, sube el fuego y añade la carne continua la cocción por 3 minutos. Retira el exceso de grasa si es necesario, agrega la calabaza y cocina por 2 minutos. Vierte la crema de chile poblano más una lata de agua, baja el fuego y cuece por 10 minuto; agrega el perejil. Retira del fuego."
  },
  {
    photoURL:'https://cdn.kiwilimon.com/recetaimagen/28733/29585.jpg',
    nombre: 'Ensalda de aguacate, fresas y pechuga de pollo',
     ingredientes:  [
       {qty: '1', ingredientName: 'taza de vinagre balsámico'},
      {qty: '1/2', ingredientName: 'taza de azúcar'},
      {qty: '1', ingredientName: 'cucharada de ajo finamente picado'},
      {qty: '1/2', ingredientName: 'cucharada de tomillo'},
      {qty: '4', ingredientName: 'cucharadas de Queso Panela Reducido en Grasa FUD® cortado en bastones medianos'},
      {qty: '1', ingredientName: 'pieza de aguacate cortado en gajos'},
      {qty: '2', ingredientName: 'tazas de lechuga mixta'},
      {qty: '1', ingredientName: 'pieza de pepino cortado en láminas y enrollarlas'},
      {qty: '2', ingredientName: 'piezas de zanahoria rallada'},
      {qty: '1', ingredientName: 'taza de fresa cortadas en mitades'},
      {qty: '10', ingredientName: 'rebanadas de Pechuga de pollo Rostizada FUD® cortada en tiritas'},
       ],
     categoria: ['ensalada'],
     preparacion: "Para la vinagreta, calienta en una ollita a fuego medio el vinagre balsámico, agrega el azúcar, el ajo, el tomillo y cocina para que se reduzca a la mitad. Reserva la vinagreta. Calienta una sartén parrilla a fuego alto y parrilla el aguacate y el Queso Panela Reducido en Grasa FUD® hasta obtener las marcas clásicas del parrillado. Reserva. En un bowl mezcla las lechugas, el pepino, las zanahorias y las fresas. Sirve en un plato y agrega el aguacate y el Queso parrillada y la Pechuga de pollo Rostizada FUD® Acompaña con la vinagreta."
  },
  
  {
    photoURL:'https://cdn.kiwilimon.com/recetaimagen/16304/th5-640x426-8247.jpg',
    nombre: 'Ensalda de col rizada con mango y pepitas',
     ingredientes:  [
       {qty: '1', ingredientName: 'manojo de col rizada'},
      {qty: '1', ingredientName: 'limón su jugo'},
      {qty: '1/4', ingredientName: 'de taza de aceite de oliva extra virgen'},
      {qty: '2', ingredientName: 'cucharadas de miel'},
      {qty: '', ingredientName: 'pimientas recién molida'},
      {qty: '1', ingredientName: 'mango picado en cubos'},
      {qty: '1/4', ingredientName: 'de taza de pepita (Semillas de Calabaza rostizadas en Sal)'},
       ],
     categoria: ['ensalada'],
     preparacion: "Para empezar debes desinfectar la col rizada con el método de tu elección. Ahora corta los tallos de cada una de las hojas de col rizada, después empieza a cortar en listones (Enrolla varias hojas de col y empieza picarlas en forma de tiras gruesas) En un bowl grande agrega la col, el jugo de medio limón, un poco de aceite de oliva y con tus manos revuelve la Ensalada hasta que se suavice la Col. Reservar. En un pequeño bowl, revuelve lo que quedo del jugo de limón con miel y bastante pimienta molida, agrega 1/4 de taza de Aceite de oliva y continua revolviendo hasta que tenga la consistencia de un aderezo y te guste el sabor, puedes agregarle Sal. Vierte el Aderezo sobre la Ensalada de Col y como toque final agrega el Mango y las Pepitas, revuelve y sirve en 4 platos individuales."
  }
]
Recipe.create(recipes)
.then(recipes=>{console.log(`Created ${recipes.length} recipes`)
    mongoose.connection.close()})

