#!/bin/bash

echo "Received a git commit, restarting docker"
cd "$(dirname "$0")"
docker-compose down
docker-compose build
docker-compose up -d
echo "Restarted successfully!"
