cd ./daw.webapp12
docker run -imysqlt --rm --name mavenInstalation -v ${PWD}:/src -w /src maven:3.6-jdk-8 mvn clean install
mvn package
Copy-Item './target/daw.webapp12-0.0.1-SNAPSHOT.jar' '../webapp12.jar'
Write-Output 'Compilacion completa completada'