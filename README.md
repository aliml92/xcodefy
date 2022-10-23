
# Xcodefy

A quite good developer's blog app. This is my first portfolio project.

The app includes the following components

- admin panel
- full text search (with `Hiberate Search`)
- dynamically generated sitemap.xml

![Alt text](images/home.png?raw=true "Homepage")

## Installation

Install the project with docker

Providing you have `mvn` and `docker` installed on your machine, create
`jar` file first:
```bash
mvn install -DskipTests
```
After making sure that `devblog.jar` file exists in target directory, run
```bash
docker build -t devblog.jar . 
``` 
Finally, start the app with 
```
docker compose up -d
```
Application starts at `http://localhost:8080`, and in order to access admin panel
first admin data should be created with
```
docker exec -it  <container_name> psql -d postgresdb -U postgresuser

INSERT INTO "user"(confirmed,email,name,password,role) VALUES (TRUE,'admin','admin','$2a$04$FfSKhAL4H3diSu4/KDQilu.RFF/moyO7aDssB87./3l6mEyiXmYwy
','ADMIN') RETURNING id;
```
this will create admin user with `username:admin, password:admin` 
access the admin panel at  `http://localhost:8080/app/login`.
> **Note**
> When creating post, post description length must be less than 300 chars.
> if new post creation is successful, it is saved as draft (not published).
> in draft page, preview new post and publish it