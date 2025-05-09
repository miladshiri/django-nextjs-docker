# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Build the Next.js app
RUN npm run build && ls -alh .next

# Set environment variables
ENV NEXT_PUBLIC_API_URL=http://backend:8000

EXPOSE 3000
CMD ["npm", "start"]
