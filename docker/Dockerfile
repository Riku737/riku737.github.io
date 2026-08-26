# Base image
FROM nginx:alpine

# Goes to the app directory
WORKDIR /app

# Copy the static website files into Nginx's default public web diretory
COPY ../ /usr/share/nginx/html

# Document that this container listens on network port 90
EXPOSE 80