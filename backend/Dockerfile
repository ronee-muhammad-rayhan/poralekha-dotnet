# Base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy source files & build
COPY . .
RUN npm run build

# Create final production image
FROM node:18-alpine

WORKDIR /app

# Copy built files
COPY --from=builder /app ./

# Expose API port
EXPOSE 4000

# Start the app
CMD ["node", "dist/main.js"]
