#Node.js base image
FROM node:14-alpine

#working directory
WORKDIR /app

# Copying dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "start"]

