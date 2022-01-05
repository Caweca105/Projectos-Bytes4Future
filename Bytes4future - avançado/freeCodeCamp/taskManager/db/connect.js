const mongoose = require('mongoose')

const connectionString = 
    'mongodb+srv://Diogo:1234@nodeexpressproject.qrbpm.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB