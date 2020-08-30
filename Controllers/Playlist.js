const Playlist = require("../Models/PlaylistModel")
const scrappList = require("./scrapper")
const playlistController = {}

playlistController.index = async (ctx) => {
	const playlists = await Playlist.find()
	
	await ctx.render("index", {playlists})
}
playlistController.play = async (ctx) => {
	await ctx.render("new")
}
playlistController.test = async (ctx) => {
	const {playlist_url} = ctx.request.body
	const data = await scrappList(playlist_url)
	ctx.body = data
	
}
playlistController.savePlaylist = async (ctx) => {
	const {original_playlist} = ctx.request.body
	const { playlist_title, playlist_url, playlist_duration, songs } = await scrappList(original_playlist)
	const newPlaylist = new Playlist({
		playlist_title,
		playlist_url,
		playlist_duration,
		songs
	})
	try {
		await newPlaylist.save()
	} catch (error) {
		console.log(error)
		ctx.body = error
	}
	ctx.redirect("/")
}

playlistController.getPlaylist = async (ctx) => {
	const { id } = ctx.params
	const playlist = await Playlist.findById(id)
	await ctx.render('playlist', { playlist })
}

module.exports = playlistController