import firebase from "firebase";

const config = {
  databaseURL:
    "https://virtual-classroom-7cb27-default-rtdb.asia-southeast1.firebasedatabase.app/",
  apiKey: "AIzaSyDrwDXSoSkDAOW8sbAKN3DE5zVmtfXPJrA",
};

firebase.initializeApp(config);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = window.location.pathname.includes("room")
  ? prompt("Enter your name")
  : "User " + Math.floor(Math.random() * 1000) + 1;
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  if (window.location.pathname.includes("room")) {
    window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
  }
}

export default firepadRef;
