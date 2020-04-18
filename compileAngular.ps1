cd ./WebApp12Angular

ng build --baseHref=/new/
Remove-Item -force '../daw.webapp12/src/main/resources/public/new/*' 
Copy-Item -recurse -force './dist/app/*' '../daw.webapp12/src/main/resources/public/new/'
cd ..