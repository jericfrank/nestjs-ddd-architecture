# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port NestJS runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]
