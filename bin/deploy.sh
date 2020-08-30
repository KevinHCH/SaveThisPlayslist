#!/bin/bash

# Create Network
docker network create SaveList

# Create Mongo container
docker run --name mongo -d -p 27017:27017 --network SaveList mongo
printf "\n #### The Mongo database is UP \n"
sleep 2
printf "\n #### We are preparing the image for server \n"
sleep 2
# Create the image of Node + puppeteer
docker build -t spotilist -f ./Docker/Dockerfile.prod .

sleep 2
#Create the container with our own image
docker run --name spotifylist -d -p 4000:4000 --network SaveList spotilist

printf "\n #### The containers are UP, visit localhost:4000 on your browser \n"

sleep 1.5

docker ps -a
