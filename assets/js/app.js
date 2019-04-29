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
// initialize variables for data entry
var train_name = "";
var train_destination = "";
var train_frequency = "";
var train_arrival_time = "";
var next_train = "";
// when the user clicks the submit button...
$(".add_train_btn").on("click",function(){
  // capture the user input data...
  train_name = $("#train_name").val().trim();
  train_destination = $("#train_destination").val().trim();
  train_arrival_time = $("#departure_time").val().trim();
  train_frequency = $("#departure_interval").val().trim();
  // calculate remaining time...
  var initial_departure = moment(train_arrival_time, "HH:mm").subtract(1,"years");
  console.log(initial_departure);
  var time_difference = moment().diff(moment(initial_departure),"minutes");
  console.log(time_difference);
  var remaining_time = time_difference % train_frequency;
  console.log(remaining_time);
  var time_until = train_frequency - remaining_time;
  console.log(time_until);
  var next_train = moment().add(time_until,"minutes");
  console.log(next_train);
  // push new train data onto the database...
  database.ref("trains").push({
    train_name: train_name,
    train_destination: train_destination,
    train_frequency: train_frequency,
    train_arrival_time: train_arrival_time,
    next_train: next_train
  }); 
  // reset the form....
  $("#train_name").val("");
  $("#train_destination").val("");
  $("#departure_time").val("");
  $("#departure_interval").val("");
  // and return false to prevent the page from resetting
  return false;
})
// event handler for 
database.ref("trains").on("child_added",function(snapshot){
  // alert("new train added");
  console.log(snapshot.val());
  $("#new_train").append("<tr><td>" + snapshot.val().train_name + "</td>" 
  + "<td>" + snapshot.val().train_destination + "</td>" 
  + "<td>" + snapshot.val().train_frequency + "</td>" 
  + "<td>" + snapshot.val().train_arrival_time + "</td>"
  + "<td>" + snapshot.val().next_train + "</td></tr>");
  return false;
})


