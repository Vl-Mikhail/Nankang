import React from 'react';
import Navigator from './routes/Navigator';
import * as firebase from 'firebase';


let config = {
    apiKey: "AIzaSyBqBxTHvFXF0aRbajLFt-rAVWh4-o4p5LA",
    authDomain: "nankang-78d26.firebaseapp.com",
    databaseURL: "https://nankang-78d26.firebaseio.com",
    projectId: "nankang-78d26",
    storageBucket: "nankang-78d26.appspot.com",
    messagingSenderId: "157539529642"
};
firebase.initializeApp(config);

const Root = () => <Navigator />;

export default Root;