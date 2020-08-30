const path = require("path")
const Koa = require("koa")
const router = require("./routes")
const render = require("koa-ejs")
const bodyParser = require("koa-bodyparser")
const app = new Koa();

//Enable the POST params in body
app.use(bodyParser());

// Enable the beautiful routes
// IS SO IMPORTANT USE allowedMethods TO GET THE POST PARAMS
app.use(router.routes()).use(router.allowedMethods());

// Set the views config
render(app,{
	root: path.join(__dirname, 'Views'),
	layout: 'layout',
	viewExt: 'html',
	cache: false,
	debug: false
})


module.exports= app