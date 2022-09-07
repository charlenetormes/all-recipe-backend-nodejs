const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3_ArJrFtQPh1K7x8y0FNdVay8HghtueM",
  authDomain: "recipe-app-a38c1.firebaseapp.com",
  databaseURL: "https://recipe-app-a38c1-default-rtdb.firebaseio.com",
  projectId: "recipe-app-a38c1",
  storageBucket: "recipe-app-a38c1.appspot.com",
  messagingSenderId: "110195423281",
  appId: "1:110195423281:web:976089d1e014e5ffb2bd10",
  measurementId: "G-M7SPM9Z1LY"
};

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: true}))


exports.app = functions.https.onRequest(app)

