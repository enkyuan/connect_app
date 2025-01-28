#!/bin/bash

# Stop docker container
echo "Stopping docker container..."
docker stop container "connect_app"

# Shut down Expo development server
echo "Stopping Expo development server..."
kill -INT 91959