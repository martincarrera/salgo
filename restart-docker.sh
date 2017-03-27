#!/bin/bash

echo "Restarting docker..."
cd "$(dirname "$0")"
docker-compose down
docker-compose build
docker-compose up -d
echo "Restarted successfully!"
