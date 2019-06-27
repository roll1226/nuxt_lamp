# Docker-LAMP-Nuxt

- nginx
- MariaDB
- PHP
- PHPMyAdmin
- Nuxt.js

## How to start
```shell
cd frontend
yarn OR npm install
cd ..
docker-compose up
```

## mariadb.cnf change
~~~
cd mariadb
vim mariadb.cnf

++ default_time_zone='Asia/Tokyo' 

docker-compose up --build
~~~

## Ports
- nginx 8080
- MariaDB 13306
- PHPMyAdmin 4040
- Nuxt.js 1000

## MariaDB
### Default root password
password: password
