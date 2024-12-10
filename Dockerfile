# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that your application listens on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]