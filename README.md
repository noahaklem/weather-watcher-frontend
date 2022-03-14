# Weather Watcher Frontend
<div align='center'>

## A React/Redux Project

  <p> Frontend Development </p>
  <h3>Noah Klem - 2022</h3>
</div>
<h5  align="center">Contact Information</h5>
<p align="center">
  <a target="_blank"href="https://www.linkedin.com/in/noahaklem/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="mailto:noahaklem@gmail.com?subject=Hello%20Ileri,%20From%20Github"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>

### This project is accompanied by https://github.com/noahaklem/weather-watcher-backend

Weather Watch is a frontend stateful application that make calls to an external rails api, also built by Noah Klem. The application features:

<ul align='center'>
  <li>Sign into a user profile consisting of a username and password</li>
  <li>Grant user a JWT authorization token</li>
  <li>Make a user profile consisting of a username and password</li>
  <li>Persist new user to rails api database</li>
  <li>Upload multiple forecasts</li>
  
</ul>

## A Note On Application

This application is made to be accompanied by the above rails api. However, it is possible to connect this frontend to another api. Although it would be a pain because this frontend is design specifically for this project. This frontend is set up with two default URLs for processing a fetch request that can be changed. 

The HTTP verbs are POST and GET. You will see these actions set up in the actions folder under addForecast.js and onStartUp.js.

## Redux

** This project makes use of Redux and state middleware. You will need to us understand that Redux state should note be manipulated throughout the project. However, you will see a moment in Redux's rootReducer folder that state is set to undefined and the default recuders are all set to default values at one time. That is because of the JWT token and expiration method. 

## JWT

  JSON Web Token is used to authenticate a user in the rails API. This was purely for practice using JWT's.

# Installation

In the command line run the following:

1. `$ npm install`
2. `$ npm start`
3. Upon start up you will have access to as many forecast as you would like. Play around. Different states, different contries!


