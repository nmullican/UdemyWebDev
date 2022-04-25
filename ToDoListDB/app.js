//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

const itemSchema = new mongoose.Schema({ name: String});
const Item = mongoose.model('Item', itemSchema);

// load list from database
Item.find({}, function(err, dbItems){
  for(var i=0; i<dbItems.length; i++)
  {
    items.push(dbItems[i].name);
  }

  app.get("/", function(req, res) {

    const day = date.getDate();

    // show list
    res.render("list", {listTitle: day, newListItems: items});

  });
});

app.post("/", function(req, res){
  const item = req.body.newItem;

  if(item){
    // add to database
    var dbItem = new Item({name: item});
    dbItem.save(function(err, doc) {
      if (err)
      return console.error(err);

    });

    if (req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work");
    } else {
      items.push(item);
      res.redirect("/");
    }
  }
});

app.post("/delete", function(req, res){
  const checkedID = req.body.checkedbox;
  console.log(checkedID);

  // delete from item list
  items.splice(items.indexOf(checkedID), 1);

  // delete from database
  Item.deleteOne({name: checkedID}).then(function(){
    console.log(checkedID + " deleted");

    res.redirect("/");
  })
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/:siteName", function(req,res){
  const siteName = req.params.siteName;
  
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
