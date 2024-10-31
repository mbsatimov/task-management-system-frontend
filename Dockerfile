# Stage 1: Build Vue.js App
FROM node:18 AS build-stage
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies and build Vue app
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm build

# Stage 2: Run Vue.js App and json-server
FROM node:18 AS runtime
WORKDIR /app

# Install json-server and pnpm globally
RUN npm install -g json-server pnpm

# Copy built Vue.js app from build stage
COPY --from=build-stage /app/dist ./dist
COPY db.json .

# Expose the ports for the Vue app and json-server
EXPOSE 3000 8000

# Start both services
CMD json-server --watch db.json --port 8000 & npx serve -s dist -l 3000
