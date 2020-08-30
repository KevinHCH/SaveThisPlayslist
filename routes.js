const KoaRouter = require("koa-router")

const router = new KoaRouter();
const playlistController = require("./Controllers/Playlist")

router.get("/",playlistController.index)
router.get("/new",playlistController.play)
router.get("/playlist/:id",playlistController.getPlaylist)
router.post("/save", playlistController.savePlaylist)
router.post("/test", playlistController.test)
module.exports =  router