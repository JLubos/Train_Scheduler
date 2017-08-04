console.log("linked");


// 1. Initialize FireBase

var config = {
    apiKey: "AIzaSyCzOjqN95GgLTaU79oOSmOo-g7Fzmi6ujc",
    authDomain: "train-scheduler-747a9.firebaseapp.com",
    databaseURL: "https://train-scheduler-747a9.firebaseio.com",
    projectId: "train-scheduler-747a9",
    storageBucket: "train-scheduler-747a9.appspot.com",
    messagingSenderId: "936282695188"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  // 2. Add train 
  $("#add-train-btn").on("click", function(event){
  	event.preventDefault();

  	var name = $("#train-name-input").val().trim();
  	var destination = $("#destination-input").val().trim();
  	var time = $("#first-train-input").val().trim();
  	var frequency = $("#frequency-input").val().trim();

  	var newTrain = {
  		name: name,
  		destination: destination,
  		time: time,
  		frequency: frequency
  	};

  	database.ref().push(newTrain);

  	console.log(newTrain);

  	$("#train-name-input").val("");
  	$("#destination-input").val("");
  	$("#first-train-input").val("");
  	$("#frequency-input").val("");


  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey){
  	console.log(childSnapshot.val());

  	var trainName = childSnapshot.val().name;
  	var trainDestination =childSnapshot.val().destination;
  	var trainTime = childSnapshot.val().time;
  	var trainFrequency = childSnapshot.val().frequency;


  	console.log(trainName, trainDestination, trainTime, trainFrequency);

  	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  		trainFrequency + "</td><td>" + trainTime + "</td></tr>");






  });

