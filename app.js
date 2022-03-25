const express = require('express');
const app = express();
const config = require('./config/index')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");
const MongoDBSession = require("connect-mongodb-session")(session);
const mongoose = require('mongoose')
mongoose.connect(`${config.database_port}/${config.database_url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}) 
    .then(() => { console.log('MongoDb is running on', `${config.database_port}/${config.database_url}`) })
    .catch((error) => { console.log(error) })
// Middleware
const STORE = new MongoDBSession({
    uri: `${config.database_port}/${config.database_url}`,
    collection: "Session"
})
app.use(session({
    secret: config.session_key,
    saveUninitialized: false,
    store: STORE,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: config.session_time,
        sameSite: "strict"
    }
}))
app.use(expressLayouts)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(cors())



app.use('/api/actor', require('./router/actorRouter'))
app.use('/api/quality', require('./router/qualityRouter'))
app.use('/api/year', require('./router/yearRouter'))
app.use('/api/director', require('./router/directorRouter'))
app.use('/api/catalog', require('./router/catalogRouter'))
app.use('/api/country', require('./router/countryRouter'))
app.use('/api/genre', require('./router/genreRouter'))
app.use('/api/language', require('./router/languageRouter'))




app.listen(config.port, () => {
    console.log('Server is running on ', config.port)
})