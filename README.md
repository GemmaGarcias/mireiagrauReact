[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)  
[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![React](https://github.com/FransLopez/logo-images/blob/master/logos/react.png)](https://facebook.github.io/react/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
[![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)](http://mongoosejs.com/)
---
[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

## MIREIA GRAU WEBSITE'S PROJECT
#### The definitive portfolio webside with an administration area
## ![Screenshot Home](http://res.cloudinary.com/duholcmsa/image/upload/v1512042960/home_ws2mdc.png)

#### WEB PAGE
You can view the images in an elegant way
## ![Screenshot Gallery](http://res.cloudinary.com/duholcmsa/image/upload/v1512042666/gallery_om4mnl.png)
## ![Screenshot Gallery detail](http://res.cloudinary.com/duholcmsa/image/upload/v1512042968/preview_tjmzzt.png)

#### ADMIN PAGE
Config your page with your admin site
## ![Screenshot Admin 1](http://res.cloudinary.com/duholcmsa/image/upload/v1512043325/admin1_dnjics.png)
## ![Screenshot Admin 2](http://res.cloudinary.com/duholcmsa/image/upload/v1512043328/admin2_zeihhb.png)

### Description of quick usage 
- Link page:

  ```
  https://mireiagrau.surge.sh/
  ```

- Link Admin page:

  ```
  https://mireiagrau.surge.sh/admin
  ```
  
  
# Installation in your computer:

## 1) Run the server with database:

- Clone or download the repository: [mireiagrauPhotografExpress](https://github.com/GemmaGarcias/mireiagrauPhotografExpress)

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file

You need to create an **.env** file in the project root with the following environment variables configured:

- Port:

  ```
  PORT=3001
  ```

- Mongodb path and database to use:

  ```
  DB_URL=mongodb://localhost:27017/test
  ```
- Cloudinary account keys:
You need to be registered in [cloudinary](https://cloudinary.com/) and add your account details to the enviroment variables:

  ```
  CLOUD_NAME=XXXXXXXXXX
  API_KEY=XXXXXXXXXX
  API_SECRET=XXXXXXXXXX
  ```
- Upload foder for cloudinary images:
  ```
  UPLOAD_FOLDER=uploads
  ```

### Run the server:
All dependencies have to be be installed:
```
$ npm install
```

Start server
```
$ npm run dev
```
----

## 2) To run react client:
- Clone or download this repository

### Configuration `env` file

You need to create an **.env.development** file in the project root with the following environment variable configured:

- Api server:
  ```
  REACT_APP_API_SERVER=http://localhost:3001
  ```
### Run the react application:
All dependencies have to be be installed:
```
$ npm install
```

Start React App
```
$ npm start
```

### Author
[Gemma Garcias Escudé](https://github.com/GemmaGarcias)


