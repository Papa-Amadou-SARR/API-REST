let mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    name: {type: String, require: true},
    age: Number,
    address: String
  })

  let Person = mongoose.model('Person', personSchema)

  let pipita = new Person({name: 'Pipita', age:27, address: 'Diamaguene'})
  console.log(pipita);


  module.exports = mongoose.model('Person', personSchema)