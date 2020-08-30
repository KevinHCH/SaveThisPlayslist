const mongoose = require("mongoose")
const { DB_HOST, DB_NAME, DB_PORT, APP_MODE } = require("./Config")

const _DB_HOST = APP_MODE === "dev" ? "localhost" : DB_HOST
const DB_URL = `mongodb://${_DB_HOST}:${DB_PORT}/${DB_NAME}`
const mongooseOptions = {
	useNewUrlParser : true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}

//Connect to DB
mongoose.connect(DB_URL,mongooseOptions)
const connection = mongoose.connection
connection.on("error", console.error.bind(console, "Connection error "))
connection.once("open",() => {
	console.log(`Connected to Database on PORT: ${DB_PORT}`);
})