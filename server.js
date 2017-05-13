// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//json objects
//==============================================================
var tables = [
{
   customerName: "yoda",
   phoneNumber: "484-867-5301",
   customerEmail: "yoda@jediMaster.com",
   customerID: 2000
 },
 {
   customerName: "Darth Maul",
   phoneNumber: "848-687-5301",
   customerEmail:"darth@sith.com",
   customerID: 2001
 },

{
   customerName: "Darth Vader",
   phoneNumber: "848-666-5301",
   customerEmail:"darthV@sith.com",
   customerID: 2001
},
{
   customerName: "Emperor Palpatine ",
   phoneNumber: "848-687-5301",
   customerEmail:"EP@sithLord.com",
   customerID: 2001
},

  {
   customerName: "Obi Wan Kenobi",
   phoneNumber: "767-687-5301",
   customerEmail: "Originan@jedi.com",
   customerID: 2002
}];

//=Routes handling===================================================

// get for home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// get for add table page
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//get for view tables 
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(tables);
});


// post for posting new reservations 
app.post("/api/tables", function(req, res) {
 var newReservation = req.body;
 //newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();

 console.log(newReservation);

 tables.push(newReservation);

 res.json(newReservation);
});

//post for adding to the waitlist
app.post("/api/waitlist", function(req, res) {
 var newReservation = req.body;
 //newReservation.name = newReservation.name.replace(/\s+/g, "").toLowerCase();

 console.log(newReservation);

 tables.push(newReservation);

 res.json(newReservation);
});



//====================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});