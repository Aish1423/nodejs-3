const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/node_test") //local ki jgha 127.0.0.1.27017

.then(()=>{
console.log("DB is connected")
})

.catch((err)=>{
console.log("error  in DB connection", err);

})