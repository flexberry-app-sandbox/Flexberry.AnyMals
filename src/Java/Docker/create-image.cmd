docker build --no-cache -f SQL\Dockerfile.PostgreSql -t anymals-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t anymals-java/app ../../..
