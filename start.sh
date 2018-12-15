#!/bin/bash

docker-compose down
docker-compose up -d
sleep 5
echo 'CREATE DATABASE IF NOT EXISTS camagru' | docker exec -i docker-mysql /usr/bin/mysql -uroot -prootpwd
cat 'dumps/dump.sql' | docker exec -i docker-mysql /usr/bin/mysql -uroot -prootpwd camagru
#this command gets id of running container
CURID=$(docker ps -a | grep camagru_php-apache | awk '{print $1}')
docker attach $CURID