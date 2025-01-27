#!/bin/bash

# Start the Docker container in detached mode
echo "Starting Docker container..."
docker compose up -d

# Wait for a moment to ensure the container is ready
echo "Waiting for container to initialize..."
sleep 5

# Start the Expo development server
echo "Starting Expo development server..."
bun run ios
