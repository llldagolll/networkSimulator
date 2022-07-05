#/bin/bash
set -eu

echo 'set up your app'
echo 'which port do you want to use'
read  -p 'frontend port: ' FRONTEND
FRONTEND=${FRONTEND:=3000}
read -p 'backend port: ' BACKEND
BACKEND=${BACKEND:=5000}
echo '==========================================='
echo 'set up your mongoDB'
read -p 'Username: ' MONGO_USERNAME
MONGO_USERNAME=${MONGO_USERNAME:='nbroot'}
read -p 'Password: ' MONGO_PASSWORD
MONGO_PASSWORD=${MONGO_PASSWORD:='nbpassword'}
read -p 'mongoDB port : ' MONGO_PORT
MONGO_PORT=${MONGO_PORT:=27017}
read -p 'mongo-express port: ' MONGO_EXPRESS_PORT
MONGO_EXPRESS_PORT=${MONGO_EXPRESS_PORT:=8081}


echo "
FRONTEND=${FRONTEND}
BACKEND=${BACKEND}
MONGO_USERNAME=${MONGO_USERNAME}
MONGO_PASSWORD=${MONGO_PASSWORD}
MONGO_PORT=${MONGO_PORT}
MONGO_EXPRESS_PORT=${MONGO_EXPRESS_PORT}
" > .env

echo '==========================================='
echo 'init container'
echo 'frontend'
docker-compose run -w /app --rm frontend-senior-project npm install
echo 'backend'
docker-compose run -w /app --rm backend-senior-project npm install
