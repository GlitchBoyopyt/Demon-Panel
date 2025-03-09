FROM gitpod/workspace-full

# Install Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Install MongoDB
RUN apt-get update && \
    apt-get install -y mongodb && \
    mkdir -p /workspace/data/db

# Set MongoDB data path
ENV MONGO_DB_PATH="/workspace/data/db"
