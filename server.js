/********************************************************************************

* WEB322 – Assignment 03

*

* I declare that this assignment is my own work in accordance with Seneca's

* Academic Integrity Policy:

*

* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html

*

* Name: ______________PEACE GBADAMOSI ADEDEJI________ Student ID: _____158664219_________ Date: _______2023-10-29_______

*

* Published URL: https://fair-red-hare-fez.cyclic.app

*

********************************************************************************/
const legoData = require("./modules/legoSets");
 
const path = require("path");
const fs = require("fs");
const express = require("express")
const app = express()

const HTTP_PORT = 8080
app.use(express.static('public'));
app.set('view engine', 'ejs');
 
 
app.get("/", (req, res) => {
  const aboutFilePath = path.join(__dirname, "views", "index.ejs");
  const notFoundFilePath = path.join(__dirname, "views", "404");

 
  fs.access(aboutFilePath, fs.constants.F_OK, (err) => {
    if (!err) {
       
      res.render(aboutFilePath);
    } else {
       
      res.status(404).sendFile(notFoundFilePath);
    }
  });
});

 app.get("/about", (req, res) => {
  res.render("about");
    
})
 

 


 
app.get("/lego/sets/:setNumber", async (req, res) => {
  try {
    const setNumValue = req.params.setNumber; // Extract set number from URL
    const result = await legoData.getSetByNum(setNumValue);

    if (result) {
     // res.json(result);

      res.render("set", { set: result });
    } else {
      res.status(404).render("404",{message:"I'm sorry, we are unable to find what you are looking for"});
    }
  } catch (error) {
    console.error("Error while retrieving Lego set by ID:", error);
    res.status(404).render("404",{message:"I'm sorry, we are unable to find what you are looking for"});
  }
});

 
 

app.get("/lego/sets", async (req, res) => {
  try {
    const theme = req.query.theme; // Extract the "theme" query parameter
 
    if (theme) {
      const filteredSets = await legoData.getSetsByTheme(theme);

      if (filteredSets.length > 0) {
        // Render the 'sets.ejs' template and pass the data to it
        res.render("sets", { sets: filteredSets });
      } else {
        res.status(404).render("404",{message:"I'm sorry, we are unable to find what you are looking for"});
      }
    } else {
      const allSets = await legoData.getAllSets();
      // Render the 'sets.ejs' template and pass the data to it
      res.render("sets", { sets: allSets });
    }
  } catch (error) {
    console.error("Error while retrieving Lego sets:", error);
    res.status(404).render("404",{message:"I'm sorry, we are unable to find what you are looking for"});
  }
});


legoData.initialize().then(() => {
  app.listen(HTTP_PORT, () => {
    console.log("Server listening on port " + HTTP_PORT);
  });
});