// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAtf_fkTgcttHrggvjdtbiZbdc3GmKsqNk",
  authDomain: "voidshopacclq.firebaseapp.com",
  databaseURL: "https://voidshopacclq-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "voidshopacclq",
  storageBucket: "voidshopacclq.firebasestorage.app",
  messagingSenderId: "840847932522",
  appId: "1:840847932522:web:49aa90293c0283d715de13"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
