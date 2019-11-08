# django-react

***
### Backend-Setup 

Activate Virtual env:-
```
python -m venv venv
venv\Scripts\activate
```
Install Dependencies:- 
```
cd Backend
pip install -r requirements.txt
```
Make Migrations:-
```
python ./manage.py makemigrations
python ./manage.py migrate
```
Create super user:-
```
python manage.py createsuperuser
```
Start server for your REST-API:-
```
./manage.py runserver
```     

***
### frontend

Install Dependencies:- 
```
cd Backend
npm install
```
Start front server:-
```
npm start
```
