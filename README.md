# Boggle_whale

## Pre-requisites:
- This app uses NodeJS with Express for the backend, ReactJS for the frontend and MySQL for database. Make sure you have provided the dependencies before running the app.

## How to run the app
### 0. Before you start ...
- As you can see in the .gitignore file in the backend folder, I am hiding the `node_modules` folder (cause it's too big !?!) and the `config` folder, which contains a `dev.env` file that stores configuration information for the repository. Before running the app, you will need to create a `dev.env` file and place it inside the `config` folder by yourself:
- The `config` folder should include the following:
  + `PORT`: the port used for the backend server. Should not be 3000, since I alr used that port for the frontend.
  + `JWT_SECRET`: I use JSON Web Token to create the authentication token, so this is the secret used to generate the token. Can be anything you like.
  + `MYSQL_USERNAME`: The user to access your MySQL database. if you do not want to create an user, you can just use `root` here.
  + `MYSQL_PWD`: The password for your MySQL database.
### 1. Start the MySQL database
- In MySQL command shell, run the command `source [directory of this repository]\Boggle_whale\backend\database\schema.sql`. This will dispose any, if exists, databases used for the app and create a new one.
### 2. Start the backend server
- First, cd to the `backend` folder, then install any dependencies required for the backend server by running `npm install`.
- Then run the command `npm start` to host the backend server!
### 3. Start the frontend server
- First, cd to the `frontend` folder, then install any dependencies required for the backend server by running `npm install`.
- Then run the command `npm start` to host the frontend server!
### 4. Enjoying the game
- After you have successfully started the app, go to `http://localhost:3000/` to start playing the game! 

## Some screenshots of the game
Some screenshots. Sorry I am not really a frontend developer so the UI does not look so good ...
- Before the game start: 
![Alt text](screenshot/beforestart.png?raw=true "before start")
- Creating the game, which lasts for 3 minutes with a random board:
![Alt text](screenshot/init.png?raw=true "init")
- Playing the game:
![Alt text](screenshot/playing.png?raw=true "playing")
- Viewing the game history:
![Alt text](screenshot/viewgame.png?raw=true "viewgame")
