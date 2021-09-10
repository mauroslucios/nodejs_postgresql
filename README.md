# docker, nodejs, postgresql e pgadmin4

Uma simples aplicação com nodejs, postgresql e pgadmin em container docker **simples mas eficiente**.


## Arquivos

#### docker-compose 
#### Dockerfile
#### package.json
#### .gitignore

## Pastas
#### data/postgres = volume docker para postgresql
#### /var/www/exemplo-nodejs = volume entre container e host

## Comandos
#### docker build -t "tag-name" usuario_docker_hub/nome_aplicação:versão
#### docker run -d --name nodepostgresql -p 3000:3000 --network=nodejs_network --ip 172.20.1.3  usuario_docker_hub/nome_aplicação:versão
#### docker ps
#### docker inspect container_id
#### docker exec -it postgres_nodejs psql -U postgres
#### docker exec -it postgres_nodejs psql -U postgres -d banco -1 -f /var/lib/postgresql/data/001_create_table_up.sql => executa script.sql dentro do container populando o banco


#### http://localhost:3000
