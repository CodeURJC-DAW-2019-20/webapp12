cd ./WebApp12Angular

docker run -it --rm --name angularInstalation -v ${PWD}:/src -w /src node /bin/bash -c "npm install -g @angular/cli; npm install; ng build --baseHref=/new/" 
Remove-Item '../daw.webapp12/src/main/resources/public/new/*' 
Copy-Item -recurse './dist/app/*' '../daw.webapp12/src/main/resources/public/new/'

cd ..
cd ./daw.webapp12
docker run  --network=bridge --rm --name mysql -e "MYSQL_ROOT_PASSWORD=13777091825" -e "MYSQL_DATABASE=daw_webapp12" -e "MYSQL_ROOT_HOST=%" -d -p 3306:3306 mysql:latest
# Start-Sleep -s 5
docker run  --network=bridge --rm --name mavenInstalation --link mysql:mysql -v ${PWD}:/src -w /src maven:3.6-jdk-8 /bin/bash -c "mvn clean install; mvn package;"
docker stop mysql

Copy-Item './target/daw.webapp12-0.0.1-SNAPSHOT.jar' '../webapp12.jar'
cd ..

docker build --rm -f "Dockerfile" -t webapp12:latest "."
#Write-Output 'Compilacion completa'