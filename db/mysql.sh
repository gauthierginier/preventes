mkdir -p $MYSQL_PATH
docker run --rm -d --name $MYSQL_CONTAINER_NAME -p $DATABASE_PORT:$DATABASE_PORT -e MYSQL_ROOT_HOST='%' -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD -e MYSQL_USER=$STRAPI_USER -e MYSQL_PASSWORD=$STRAPI_PASSWORD -e MYSQL_DATABASE=$DATABASE_NAME -v $MYSQL_PATH:/var/lib/mysql mysql:latest
