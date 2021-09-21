import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCHvW0oX517XN3XQQ1p9uZJ1t9pTiLdOMA',
    authDomain: 'web-00-team.firebaseapp.com',
    databaseURL: 'https://web-00-team-default-rtdb.firebaseio.com',
    projectId: 'web-00-team',
    storageBucket: 'web-00-team.appspot.com',
    messagingSenderId: '283063200868',
    appId: '1:283063200868:web:0e4e39d57da7254755c371',
    measurementId: 'G-99L62QK8GY',
});

export const auth = app.auth()
export default firebase