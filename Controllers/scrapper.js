const puppeteer = require("puppeteer")
const fs = require("fs")

const saveInJson = (data) => {
	console.log("Writing file");
	fs.writeFileSync("list.json", JSON.stringify(data, null, 2))
	console.log("The file has been created");
}

const scrappList = async (url, log = false) => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox']
	});
	const page = await browser.newPage();
	await page.goto(url);
	const albumTitle = await page.$eval("#main span h1", element => element.innerText) || "Fail title"
	const albumLength = await page.$eval("#main a[href*='/user'] + span", element => element.innerText)
	const songs = await page.evaluate(() => {
		const rows = [...document.querySelectorAll("[data-testid='tracklist-row']")]
		const data = rows.map(song => {
			const splittedSongs = song.innerText.split("\n").filter(item => /[A-Za-z]|\d/.test(item))
			return splittedSongs
		}).map(song => {
			const length = song.pop()
			const album = song.pop()
			const index = song.shift()
			const songName = song.shift()
			const artist = song.map(name => name === "E" ? "(Explicit)" : name)
			return { index,songName, artist, album, duration: length }
		})
		return data
	})
	const songsObject = {
		playlist_url: url,
		playlist_title: albumTitle,
		playlist_duration: albumLength,
		songs
	}
	
	if(log) {
		saveInJson(songsObject)
	}

	await browser.close()
	return songsObject
}

module.exports = scrappList