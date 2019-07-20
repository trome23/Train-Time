
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCj6OJdzZR3AyZVZlPH7sVX334M372KuyQ",
    authDomain: "traintime-5eee1.firebaseapp.com",
    databaseURL: "https://traintime-5eee1.firebaseio.com",
    projectId: "traintime-5eee1",
    storageBucket: "",
    messagingSenderId: "784565766916",
    appId: "1:784565766916:web:6424062b765023a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var trainData = firebase.database();

  $('#add-train-btn').on('click', function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input")
      .val()
      .trim();
    var destination = $("#destination-input")
      .val()
      .trim();
    var firstTrain = $("#first-train-input")
      .val()
      .trim();
    var frequency = $("#frequency-input")
      .val()
      .trim();

    var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
    };

    trainData.ref().push(newTrain);    

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);
 // Store everything into a variable.
 var tName = childSnapshot.val().name;
 var tDestination = childSnapshot.val().destination;
 var tFrequency = childSnapshot.val().frequency;
 var tFirstTrain = childSnapshot.val().firstTrain;

 var timeArr = tFirstTrain.split(":");
 var trainTime = moment()
   .hours(timeArr[0])
   .minutes(timeArr[1]);
 var maxMoment = moment.max(moment(), trainTime);
 var tMinutes;
 var tArrival;

 
 if (maxMoment === trainTime) {
   tArrival = trainTime.format("hh:mm A");
   tMinutes = trainTime.diff(moment(), "minutes");
 } else {

   var differenceTimes = moment().diff(trainTime, "minutes");
   var tRemainder = differenceTimes % tFrequency;
   tMinutes = tFrequency - tRemainder;

   tArrival = moment()
     .add(tMinutes, "m")
     .format("hh:mm A");
 }
 console.log("tMinutes:", tMinutes);
 console.log("tArrival:", tArrival);


 $("#train-table > tbody").append(
   $("<tr>").append(
     $("<td>").text(tName),
     $("<td>").text(tDestination),
     $("<td>").text(tFrequency),
     $("<td>").text(tArrival),
     $("<td>").text(tMinutes)
   )
 );
});


