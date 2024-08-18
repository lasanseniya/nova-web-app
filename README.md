<center>

## NOVA - YouTube study notes generator

</center>

### Description:

Nova web application utilises youtube transcriptions and gpt 3.5 turbo to generate study notes corresponding to the user specified YouTube video.

Study notes follow a cornell structure comprising of,

1. Structured note
2. Cue questions (to improve recall to information)
3. Summary

<br/>
 
### Purpose: 
Generating study notes for solo and self learners from thier favourite YouTube sources.

<br />

## Dependencies

### Frontend

| runtime           | developement |
| ----------------- | ------------ |
| axios             | tailwind     |
| html-react-parser | prettier     |
| react-dom         | cypress      |
| react-router-dom  | eslint       |
| react-hot-toast   | vite         |
| react-icons  
| react-spinners

### Backend

| runtime               | developement |
| --------------------- | ------------ |
| bcrypt                | nodemon      |
| cors                  |
| dotenv                |
| express               |
| express-async-handler |
| jsonwebtoken  
| mongoose  
| node-fetch
| nodemailer
| youtube-transcript

## Pre-requisites and installation

- MongoDB Atlas connection string
- GPT 3.5 turbo API key
- NodeJS 16.x or above
- Google app password for enabling email

  <br />

1. clone the repo to your local development environment<br />
   `git clone https://github.com/lasanseniya/nova-web-app.git`

2. Install the packages in both frontend and backend via, <br />
   `npm install`

3. create .env files containing the following info,

   Frontend:

   ```
   VITE_API_KEY - gpt 3.5 turbo api key
   VITE_SERVER_URL - server url
   ```

   <br />

   Backend:

   ```
   PORT - port number
   CONNECTION_STRING - mongoDB atlas connection string
   ACCESS_TOKEN_SECRET - an access token secret
   FRONTEND_URL - frontend url
   EMAIL_FROM - email address
   EMAIL_PASSWORD - google app password from above email
   ```

4. start the dev backend server and frontend via, <br />
   `npm run dev`

<br />

## Tech Stack

<center>

[![My Skills](https://skillicons.dev/icons?i=figma,react,tailwind,nodejs,express,mongodb,cypress,git,github,vercel,vscode,postman)](https://skillicons.dev)

</center>
<br />

## Screenshots

<center>

### User Login and SignUp

<img src="./readme_assets/Opera%20Snapshot_2024-04-04_012447_nova-web-app.vercel.app.png" alt="Login page" width="300" /> <img src="./readme_assets//Opera%20Snapshot_2024-04-04_012544_nova-web-app.vercel.app.png" alt="SignUp page" width="300" />

### OTP send & verification

<img src="./readme_assets/Opera%20Snapshot_2024-04-04_012607_nova-web-app.vercel.app.png" alt="password change" width="300" /> <img src="./readme_assets/Opera Snapshot_2024-04-04_012629_nova-web-app.vercel.app.png" alt="password change" width="266" />

### Password reset

<img src="./readme_assets/iPhone_X-removebg-preview.png" width="120" style="margin-right:20"><img src="./readme_assets/Opera Snapshot_2024-04-04_012749_nova-web-app.vercel.app.png" width="300">

### Study note generation

<img src="./readme_assets/Opera Snapshot_2024-04-04_012925_nova-web-app.vercel.app.png">

### Note storage

<img src="./readme_assets/Opera Snapshot_2024-04-04_013004_nova-web-app.vercel.app.png">

</center>

<br />

## Contributors
<a href="https://github.com/lasanseniya"> @lasanseniya </a>

<a href="https://github.com/SavindiSilva"> @savindisilva </a>

<a href="https://github.com/Ranidhip"> @ranidhiperera </a>

<a href="https://github.com/chamathAn"> @chamathmunasinghe </a>

<a href="https://github.com/kusalpathirage"> @kusalpathirage </a>
