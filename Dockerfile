FROM node:18-alpine
WORKDIR /app
ADD frontend/ .
RUN yarn install
EXPOSE 3000
CMD ["npm","run","dev"]
