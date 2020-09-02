#!/bin/bash

docker stop mongo spotifylist && docker rm mongo spotifylist && docker rmi spotilist
docker network rm SaveList

sleep 2
printf "\n #### The network and containers has been deleted "
