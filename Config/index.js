const path = require("path")
const envPath = path.join(__dirname ,'..','.env')
require("dotenv").config({path: envPath})

const DB_PORT = process.env.DB_PORT
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const APP_PORT = process.env.APP_PORT
const APP_MODE = process.env.APP_MODE

module.exports = {
	APP_MODE,
	APP_PORT,
	DB_PORT,
	DB_NAME,
	DB_HOST
}