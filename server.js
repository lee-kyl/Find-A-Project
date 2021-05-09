const express = require('express');
const mongoose = require('mongoose');
const mongoURI = require('./model/mongoConnection')
const cors = require('cors');
const userRoute = require('./routes/user.js');
const postRoute = require('./routes/post.js');
const profileRoute = require('./routes/profile.js');
const teamRoute = require('./routes/team.js');
const app = express();
const port = 5000;

//cors is used for connect express to frontend request
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/profile', profileRoute);
app.use('/team', teamRoute);

mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(process.env.PORT || port, () => {
        console.log('Server started, listening at localhost:5000');
        }))
        .catch((err) => console.log(err));



