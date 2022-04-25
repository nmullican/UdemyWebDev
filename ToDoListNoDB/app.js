const express = require("express");

// to be able to use req.body feature
const bodyParser = require("body-parser");

const app = express();

var chores = [];

// for ejs templates
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// tell the application to use the files in the public folder
// w/o this we cannot use static files like sytles.css
app.use(express.static("Public"));

// send data to browser
app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  switch(currentDay) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    default:
    day = "Saturday";
  }

  // this method looks in the views folder for the list ejs file
  // the newListItem will contain the new item being added
  // when the page reloads after the user clicks the add button
  // all variables in template must be supplied at this point
  res.render("list", {kindOfDay: day, newListItem: chores})
})

app.listen(3000, function(){
  console.log("Server running on port 3000");
})

// handle the post request for the form in the list.ejs html code
app.post("/", function(req, res){
  var newChore = req.body.newItem;

  chores.push(newChore);

  // reload the home page once user has entered data
  // the new item will be posted in the render message in
  // the app get method
  res.redirect("/");
})
