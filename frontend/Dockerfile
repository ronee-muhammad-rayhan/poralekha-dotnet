# Step 1: Use an official Node.js image as the base image
FROM node:18 AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js app for production
RUN npm run build

# Step 7: Use a lighter image for the final production container
FROM node:18-slim

# Step 8: Set the working directory for the final image
WORKDIR /app

# Step 9: Copy the build files from the builder stage
COPY --from=builder /app /app

# Step 10: Expose the port Next.js will run on
EXPOSE 3000

# Step 11: Start the Next.js server in production mode
CMD ["npm", "start"]
