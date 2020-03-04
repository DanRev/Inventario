import * as firebase from "firebase";

const firebaseConf = {
  apiKey: "AIzaSyBSOIJEznyyfHfco9O5tLD7PIhH_Z27oHw",
  authDomain: "inventario-b91cc.firebaseapp.com",
  databaseURL: "https://inventario-b91cc.firebaseio.com",
  projectId: "inventario-b91cc",
  storageBucket: "inventario-b91cc.appspot.com",
  messagingSenderId: "967091038809"
};

firebase.initializeApp(firebaseConf);

export default firebase;
