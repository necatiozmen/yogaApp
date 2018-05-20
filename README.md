

<div align="center">
 <img width= "400px" src="https://preview.ibb.co/no0DD8/logo01.png" ></img>
</div>

<!-- <a href="https://ibb.co/dB2h6T"><img src="https://preview.ibb.co/no0DD8/logo01.png" alt="logo01" border="0"></a>
src="https://cdn.pixabay.com/photo/2017/08/16/17/16/flower-of-life-2648527__340.png" -->
## About
Yogapp helps people to find yoga studios and personel yoga instructors in 220 cities all around the world.



## Getting Started


<div align="center">
 <img src="https://preview.ibb.co/dEJiBT/download.png" alt="download">
 </div>

<hr>

<div align="center">
 <img src="https://preview.ibb.co/erN3gT/Screen_Shot_2018_05_20_at_21_57_42.png" alt="download_1" border="0">
</div>
<hr>

Clone and install the dependencies for the repo:

`git clone https://github.com/necatiozmen/yogaapp.git`





### Client


Go to the choosen app directory on the CLI then run this command into client folder

`npm install`

After installing dependecies run this command -

`npm start`



### Server

Go to server folder and run -

`npm install`


Make sure you have an instance of MongoDB working on your local machine or remote server.

You should get your own yelp fusion APIKEY from -
https://www.yelp.com/fusion

You have to create in the main folder a .env file with these keys -


 <div >

```dotenv
PORT=<port number>
APIKEY = <yelpfusionAPIkey>
mongoURL=<mongodb host>
```


</div>

Change the values accordingly to yours.

After setting env file run this command on the CLI for start server running :

`nodemon app.js`


## Tech Stack

* **React** - Front end library for building user interfaces
* **Redux** - Storage to share data inside the app
* **Yelp API** - Searching service
* **Google Map API** - Google map
* **Node / Express**- Back end web framework
* **MongoDB / Mongoose** - Database storage for Node



## Author

Necati Ozmen – [Linkedin](https://www.linkedin.com/in/necatiozmen)- [GitHub](https://github.com/necatiozmen) – necatiozmn@gmail.com
