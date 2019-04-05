import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBMN8msXPBhMyxKdlq0Y6XlVSqxrWmiZpk",
    authDomain: "brainmi.firebaseapp.com",
    databaseURL: "https://brainmi.firebaseio.com",
    projectId: "brainmi",
    storageBucket: "brainmi.appspot.com",
    messagingSenderId: "967818544580"
  };
  firebase.initializeApp(config);
  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings)

  export default firebase