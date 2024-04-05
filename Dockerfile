# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using yarn
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000 to allow external access to the application
EXPOSE 3000


# Command to start the application in development mode
CMD ["npm", "run", "dev"]
