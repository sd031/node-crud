#!/bin/bash

# Install node.js
# sudo apt-get install python-software-properties -y
# sudo apt-add-repository ppa:chris-lea/node.js -y
# sudo apt-get update
# sudo apt-get install nodejs -y
# sudo npm -i pm2 -g

# Install nodemon
# sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
# sudo npm install forever -g

# mkdir /home/ubuntu/nodejs
# cd /home/ubuntu/nodejs

# Clean working folder
# sudo find /home/ubuntu/test -type f -delete
/usr/bin/pm2 pm2 stop all
sudo rm -rf /home/ubuntu/node-crud
mkdir /home/ubuntu/node-crud
