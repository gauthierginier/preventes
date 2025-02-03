mkdir -p $PGSQL_PATH
docker run --rm --network=host --name $PGSQL_CONTAINER_NAME -p $PGSQL_PORT:$PGSQL_PORT -e POSTGRES_USER=$STRAPI_USER -e POSTGRES_PASSWORD=$STRAPI_PASSWORD -e POSTGRES_DB=$DATABASE_NAME -v $PGSQL_PATH:/var/lib/postgresql/data postgres:latest
