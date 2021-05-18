const express = require('express');
const mongoose = require('mongoose');
const mongoURI = require('./model/mongoConnection')
const cors = require('cors');
const userRoute = require('./routes/user.js');
const postRoute = require('./routes/post.js');
const profileRoute = require('./routes/profile.js');
const teamRoute = require('./routes/team.js');
const commentRoute = require('./routes/comment.js');
const applicationRoute = require('./routes/application');
const app = express();
const port = 5000;

//cors is used for connect express to frontend request
app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
        origin: "http://localhost:3000",
        withCredential: false
      }));
app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/profile', profileRoute);
app.use('/team', teamRoute);
app.use('/comment',commentRoute);
app.use('/application',applicationRoute);

mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
        .then(() => app.listen(process.env.PORT || port, () => {
        console.log('Server started, listening at localhost:5000');
        }))
        .catch((err) => console.log(err));



