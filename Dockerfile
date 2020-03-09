
FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
CMD ["create_image.ps1"]
ADD webapp12.jar webapp12.jar
EXPOSE 8443
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar webapp12.jar
#ENTRYPOINT exec java $JAVA_OPTS -jar webapp12.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar webapp12.jar