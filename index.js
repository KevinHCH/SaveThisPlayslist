const http = require("http")
const app = require('./app')
const {APP_PORT} = require("./Config")
require("./database")

http.createServer(app.callback()).listen(APP_PORT);
console.log(`Koa-Server listening on PORT: ${APP_PORT}`)