FROM node:18-alpine
WORKDIR /app
COPY frontend/* app/
EXPOSE 3000
CMD ["yarn", "dev"]
