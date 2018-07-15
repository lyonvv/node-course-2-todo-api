// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Lyon Van Voorhis'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID('5b4bb1cbb39e9c949c32738b')}).then((result) => {
  console.log(result);
});



  // db.close();
});
