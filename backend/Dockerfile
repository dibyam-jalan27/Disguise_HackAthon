# Use a Node.js base image
FROM node::14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port your backend server listens on
EXPOSE 5000

# Command to start your backend server
CMD ["node", "server.js"]
