# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the frontend
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Start the frontend server
CMD ["npm", "run", "preview"]
