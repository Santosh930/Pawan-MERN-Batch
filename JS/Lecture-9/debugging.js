// function One(){
//     return 1;
// }



// function Two(){
    
//     return One()+One();
// }

// function Three(){
//     let ans=Two()+One();
//     console.log(ans);
// }
// Three();

//JSON TO BSON Conversio

const { BSON } = require('bson');

// JSON data
const jsonData = {
  "name": "John Doe",
  "email": "john@example.com",
  "birthday": "1985-01-22",
  "subscribed": true,
  "preferences": ["email", "sms"],
  "contacts": {
    "home": "123-456-7890",
    "work": "098-765-4321"
  }
};

// Convert JSON to BSON
const bsonData = BSON.serialize(jsonData);

// Display BSON representation (binary)
console.log('BSON representation (binary):');
console.log(bsonData);
console.log(bsonData.toString('hex'));


