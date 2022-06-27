#/bin/bash
set -eu

echo 'frontend'
docker-compose run -w /app --rm frontend-senior-project npm install
echo 'backend'
docker-compose run -w /app --rm backend-senior-project npm install
