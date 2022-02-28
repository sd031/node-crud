#!/bin/bash

# Stop all servers and start the server as a daemon
cd /home/ubuntu/node-crud
/usr/bin/pm2 start index.js