// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));
main().then(() => console.log("mongoose is connected.."));

 async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/aggregationu');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = main