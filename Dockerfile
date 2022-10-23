FROM openjdk:11
ADD target/devblog.jar devblog.jar
ADD src/main/resources/application.properties /opt/application.properties
EXPOSE 8080
ENTRYPOINT ["java","-jar","/devblog.jar","--spring.config.location=file:/opt/application.properties"]
