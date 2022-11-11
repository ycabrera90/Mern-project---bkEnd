
<p align="center">
  <a href="https://eip-my-summary.web.app/"
    ><img
      src="https://eip-mern-project.herokuapp.com/uploads/images/1c7af490-5617-11ed-a380-cd607499fb60.png"
      alt="EIP Studios"
     />
  </a>
</p>



# Mern Project -- Backend

_This is a project that aims to apply the basic knowledge necessary for the development of applications under the full Mern Stack_

## Starting 🚀

_These instructions will allow you to obtain a copy of the project on your local machine for development and test purposes._

Look the [**Deployment**](https://eip-mern-project.herokuapp.com) so you can see the final result.


### Pre-requirements 📋

_For run this project you must have installed the following packages in your local machine_

[NodeJs](https://nodejs.org/en/)

```
download and install it from its official page
```

[NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```
npm install -g serve
```
[Nodemon](https://www.npmjs.com/package/nodemon)

```
npm install -g nodemon
```

### Serve App 🔧

_If you finished all pre-requirements, the following steps must be followed_

_Create my project folder_

```
mkdir projectFolder
```

_Go into the created folder_

```
cd projectFolder
```
_Clone the repository_

```
git clone https://github.com/ycabrera90/Mern-project---bkEnd.git
```
_Go into the cloned repository_
```
cd Mern-project---bkEnd
```
_Install all dependencies_
```
npm install
```
_Get an API-Key from [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) and put it into a nodemon.json file I show you in next steps._

_Create a data base in [MongoDB Atlas](https://www.mongodb.com/atlas) and put de **databaseName**, **databaseUser** and **databasePassword**  it into a **nodemon.json** file I show you in next steps._

_Create a data base in [MongoDB Atlas](https://www.mongodb.com/atlas) and put de **databaseName**, **databaseUser** and **databasePassword**  it into a **nodemon.json** file I show you in next steps._

_Create a **nodemon.json** file in the root folder of the project. The file must have the following structure and have the previous data_

```
{
  "env": {
    "DB_USER": "databaseUser",
    "DB_PASSWORD": "databasePassword",
    "DB_NAME": "databaseName",
    "GOOGLE_API_KEY": "yourApiKeyForGeocodinAPI",
    "JWT_KEY": "thiisasupersecretprivatekeyusedtogeneratetoken"
  },
}
```

_Serve the app in your machine_
```
npm run dev
```

## Built with 🛠️
* [Express](https://expressjs.com/) - Node.js Framework!
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - Dependencies handler
* [Node.Js](https://nodejs.org/en/docs/) - JavaScript runtime environment

## Frontend Side 🖇️
_If you are interested in the frontend side part of this project you can find the repository [here](https://github.com/ycabrera90/Mern-project---APj.git)._


## Authors ✒️

* [**Yosniel Cabrera**](www.linkedin.com/in/ingenieríacubana) - *React Developer* 


## License 📄

_This project is **public** only for academic purposes._

## Read More 🎁

* Nothing important so far 

  
---
yosniel.ch@gmail.com


