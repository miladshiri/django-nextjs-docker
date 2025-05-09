# Commands
For local deployment: 
 - docker-compose up --build

Push to Docker Hub:
- docker buildx build --platform linux/amd64 -t mitechworld/backend:latest backend --push

- docker buildx build --platform linux/amd64 -t mitechworld/frontend:latest frontend --push