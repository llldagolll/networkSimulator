FROM node:18-alpine
WORKDIR /app
COPY frontend/* app/
RUN yarn
EXPOSE 3000
CMD ["yarn", "dev"]
