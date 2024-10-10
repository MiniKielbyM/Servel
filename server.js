// Import Firebase
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push, set, remove } = require('firebase/database');
const express = require("express");
const http = require("http");
const ExprApp = express();
const server = http.createServer(ExprApp);
ExprApp.use(express.static("public"));

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOFxBynXPoqK3gty8BdagT5n2EZhXSFQE",
    authDomain: "serverlessio.firebaseapp.com",
    databaseURL: "https://serverlessio-default-rtdb.firebaseio.com",
    projectId: "serverlessio",
    storageBucket: "serverlessio.appspot.com",
    messagingSenderId: "429214448308",
    appId: "1:429214448308:web:6b7d0828217be2d5d675e1",
    measurementId: "G-0K7FHKMYLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messagesRef = ref(database, 'messages');

// Function to clear the database
function clearDatabase() {
    console.log("Database cleared");
    remove(messagesRef);
}

// Timer to clear the database every .1 seconds
setInterval(clearDatabase, 100);

server.listen(8080, function () {
  console.log("Listening to port 8080.");
});
