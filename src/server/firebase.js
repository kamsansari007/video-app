import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-iJK8924Znp0ZV2IiXdkIz1bfb2XHxJQ", // Add API Key
  databaseURL:
    "https://video-meet-bc5ec-default-rtdb.asia-southeast1.firebasedatabase.app/", // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
