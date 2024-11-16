const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' })

const db = process.env.DB

// connect application to database
mongoose.connect(db).then(()=> {
    console.log("DB connection successful")
}).catch((err)=> {
    console.log(err)
})

const port = process.env.PORT || 4000

app.listen(port, ()=> {
    console.log(`App running on port ${port}`)
})