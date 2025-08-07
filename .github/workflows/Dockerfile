# Step 1: Use an official Node.js image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app’s source code
COPY . .

# Step 6: Expose the port the app runs on (change if your app uses a different port)
EXPOSE 3000

# Step 7: Command to run the app
CMD ["npm", "start"]
