# Vue 3 with Vite in Docker

This template helps you get started developing with Vue 3 in Vite and allows you to run your application inside a Docker container easily.

## Running the Application with Docker by pulling from Docker Hub

You can easily run this application using Docker. Start the container with the following command:

```sh
docker run -p 3000:3000 mahkambek/task-management-system-frontend
```

## Or, if you want, you can run Docker locally:

### 1. Clone this repository

```sh
git clone https://github.com/mbsatimov/task-management-system-frontend
cd task-management-system-frontend
```

### 2. Build the Docker image

```sh
docker-compose build
docker-compose up
```
