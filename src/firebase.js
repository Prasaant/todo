// const firebaseConfig = {
//     apiKey: "AIzaSyCOMUW2rVmR__izeZwYHbY-mRBCwYP8Gsg",
//     authDomain: "todo-27a23.firebaseapp.com",
//     databaseURL: "https://todo-27a23.firebaseio.com",
//     projectId: "todo-27a23",
//     storageBucket: "todo-27a23.appspot.com",
//     messagingSenderId: "1090204585594",
//     appId: "1:1090204585594:web:4e322b077dc8a3661db5c3",
//     measurementId: "G-PS2N5XQPB4"
//   };

import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCOMUW2rVmR__izeZwYHbY-mRBCwYP8Gsg",
        authDomain: "todo-27a23.firebaseapp.com",
        databaseURL: "https://todo-27a23.firebaseio.com",
        projectId: "todo-27a23",
        storageBucket: "todo-27a23.appspot.com",
        messagingSenderId: "1090204585594",
        appId: "1:1090204585594:web:4e322b077dc8a3661db5c3",
        measurementId: "G-PS2N5XQPB4"
});

const db=firebaseApp.firestore();
export default db;