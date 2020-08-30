const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PlaylistSchema = new Schema({
	playlist_url: String,
	playlist_title: String,
	playlist_duration: String,
	creation_date: {
		type: Date,
		default: Date.now
	},
	songs: Array
})

// module.export = mongoose.model('Playlist', PlaylistSchema)
module.exports = PlaylistSchema