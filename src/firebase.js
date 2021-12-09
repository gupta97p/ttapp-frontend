import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyAedj-dHKwmFhhgoQ55bPEF2_ty_fjAOzs",
    authDomain: "react-crud-208ef.firebaseapp.com",
    databaseURL: "https://react-crud-208ef-default-rtdb.firebaseio.com",
    projectId: "react-crud-208ef",
    storageBucket: "react-crud-208ef.appspot.com",
    messagingSenderId: "70257241700",
    appId: "1:70257241700:web:511b364d8f909de7da3971"
  };

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();