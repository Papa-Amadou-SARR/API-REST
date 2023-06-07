let mongoose = require('mongoose');
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect('mongodb+srv://pipita:ichyoboy@cluster0.ffeimny.mongodb.net/?retryWrites=true&w=majority')
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()