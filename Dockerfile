# Use official Node.js LTS version
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the full app code to the container
COPY . .

# Expose the port (3000 is common for Express)
EXPOSE 3000

# Start the app using index.js
CMD ["node", "index.js"]
