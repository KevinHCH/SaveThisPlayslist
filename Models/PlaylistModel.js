const PlaylistSchema = require("./Schemas/PlaylistSchema")
const {model} = require("mongoose")
module.exports = model('Playlist', PlaylistSchema)