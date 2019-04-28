// Initialize Firebase
var config = {
  apiKey: "AIzaSyCXi3QUuvjuXY2bCiW316-U1lWeOgHPCrY",
  authDomain: "train-scheduler-b5a29.firebaseapp.com",
  databaseURL: "https://train-scheduler-b5a29.firebaseio.com",
  projectId: "train-scheduler-b5a29",
  storageBucket: "train-scheduler-b5a29.appspot.com",
  messagingSenderId: "749549595841"
};
firebase.initializeApp(config);

var database = firebase.database();

var train_name;
var train_destination;
var train_frequency;
var train_arrival_time;

$(".add_train_btn").on("click",function(){
  train_name = $("#train_name").val().trim();
  train_destination = $("#train_destination").val().trim();
  train_arrival_time = $("#departure_time").val().trim();
  train_frequency = $("#departure_interval").val().trim();
  console.log(train_name);
})