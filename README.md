

## About This repo :

this repo is a sample of making api between Laravel 8 (backend) and Vue js 3 (frontend).
it is simple todolist app.

## Project setup

clone the repo 
```
https://github.com/aalhommada/Laravel-vue-todolist.git
```


Then cd into the folder with this command-

```
cd Laravel-vue-todolist
```

Then do a composer install

```
composer install
```

copy .env.example file and rename it to .env
and make a new database in mySql database, and name it what it ever you want , make sure that this name match in your .env file .

make migration for the tables 

```
php artisan migrate
```

generate key 

```
php artisan key:generate
```


Then do a npm install

```
npm install
```
## Run server

Run server using this command-

```
php artisan serve
```
### for the front end part you need to open another terminal for the same project and make :
```
npm run hot
```

Then go to `http://localhost:8000` from your browser and see the app.
