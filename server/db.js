const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/craig'
// const mongoURI = 'mongodb+srv://<db-name>:<password>@peggy1.bmoolkx.mongodb.net/craig'

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo successfully');
    })
}

module.exports = connectToMongo