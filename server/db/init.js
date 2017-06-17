const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost/MEDIUM_CLONE';

mongoose.Promise = require('bluebird');


module.exports = () => {
  const db = mongoose.connection;
  mongoose.connect(dbURL);
  mongoose.connection.on('connected', () => {  
    console.log('Mongoose default connection open to ' + dbURL);
  }); 

  mongoose.connection.on('error', (err) => {  
    console.log('Mongoose default connection error: ' + err);
  }); 

  mongoose.connection.on('disconnected', () =>  {  
    console.log('Mongoose default connection disconnected'); 
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(() => { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 
}