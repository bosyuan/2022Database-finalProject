# 2022Database-finalProject

This project builds a database system of trending youtube videos, it can manage auto ordering videos according to social status, or search for status of a certain video.
Data are crawled from a kaggle dataset, and we have built the auto update machanism to renew our local database accordingly.
## To run application
1. ensure their is `node` and `postgre` environment set up
  download **postrge**
  install **node**
2. make sure there is a connection to the AWS RDS instance and the DB is running
3. install and build in front end
```
cd ./frontend
npm install
npm run build
```
4. replace the files in `backend/app/views` with the files in `frontend/build`
5. run application on locol host
```
cd ./backend
npm install
node server.js
```

## For auto update 
1. in commander "!pip install kaggle"
2. add kaggle.json in /user/users/.kaggle
3. run auto_updata.py
