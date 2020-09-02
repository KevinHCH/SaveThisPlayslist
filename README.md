# Save this playlist
> This project is maded to learn how to create a complete web-app with docker
> This application allows you to analyze a spotify playlist, obtain some data such as title, artist, album ... and save it in a mongo database.
It also allows you to list your saved playlists and search for each song on Youtube.
  
 **Example**
 ![](demo/demo.gif)
  
### Stack
  - Docker
  - NodeJs
  - Mongo
### Requirements
- Docker >= 19.03
- Docker-compose (optional)
- NodeJs and NPM
- Create a **.env** in the main path and complete with your data like **.env.example**
- **IMPORTANT** This application only will works with docker if in the **.env** file the **APP_MODE** is in **prod**

### Deploy
You have 2 deploy modes.
- `git clone https://github.com/KevinHCH/SaveThisPlayslist.git`
- If you have docker-compose installed, run this comman: `docker-compose build && docker-compose up -d`.
- If you **don't have** docker-compose, run this command: `bash ./bin/deployDocker.sh`
- If you want to delete the images and containers, run this command: `bash ./bin/clean.sh`

Then if you type `docker ps` you will see 2 containers are running, then go to `localhost:4000` in your browser
