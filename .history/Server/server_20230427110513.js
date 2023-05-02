const express = require("express");
const cors = require("cors");
const connection = require("./DB/db_config");
const bodyParser = require('body-parser'); 
const encoder = bodyParser.urlencoded(); 
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running on the root");
});

app.get("/Doctorant", (req, res) => {
  const sql = `SELECT * FROM Doctorant ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.get("/Update", (req, res) => {
  const sql = `SELECT * FROM Doctorant WHERE radie IS NULL AND soutenu IS NULL AND abandon IS NULL ORDER BY nom, prenom ASC`;
  connection.query(sql, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});

app.get("/DPGR", (req,res) => {
  const sql = `SELECT * FROM DPGR`;
  connection.query(sql, (error, results) => {
    if (error) {
      console.log("ERROR");
    }
    res.send(results);
  });
});




app.get("/Connexion" , (req,res)=>{
    res.render('Connexion.ejs');
})


app.post('/Connexion',encoder,(req,res)=>{
  var email = req.body.email; 
  var password = req.body.password; 
  connection.query("SELECT * FROM DPGR where email = ? and password = ?" ,[email,password],function(error,results,fields){
    if(results.length>0){
        res.redirect("/Welcome"); 
    } else{
        res.redirect("/Connexion"); 
    }
    res.end(); 
  })
})


//When login is sucessfull

app.get("/Welcome" , (req,res)=>{
  res.render('Welcome.ejs');
})


const express = require('express');
const app = express();
const port = 3000;
const login = require('./path/to/login/file');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/Connexion', async (req, res) => {
  try {
    await login(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
Note that you also need to add the required middleware for parsing the request body using express.json() and express.urlencoded().

After these changes, your server should be able to handle the login requests and send the appropriate response based on the authentication result.





li_louni@esi.dz
give me an example of this: './path/to/login/file'
Sure! Here's an example of how you could require the login function from a file located in a folder called auth in the root directory of your project:

javascript
Copy code
const login = require('./auth/login');
This assumes that the login.js file containing the login function is located inside the auth folder. You can adjust the path to match the actual location of the file in your project.

Make sure that the login.js file exports the login function using the module.exports statement, like this:

js
Copy code
// auth/login.js

module.exports = async (req, res) => {
  // your authentication code here
}
This will allow you to import the function in other files using require.





li_louni@esi.dz
there's another problem, the server.js is in the folder Server and the login.js file is in the Client folder, 
Can one acess to another ?
By default, files in different directories cannot access each other's code directly in Node.js. In order to access a module from a different directory, you need to use a relative or absolute path to the file you want to import.

In your case, assuming that the login.js file is in a folder named Client which is a sibling folder of the Server folder, you can use a relative path to import it into your server.js file.

Here's an example of how to require the login function from the Client folder using a relative path:

javascript
Copy code
const login = require('../Client/path/to/login/file');
In this example, the .. tells Node.js to go up one level in the folder hierarchy to the parent folder of the Server folder, and then descend into the Client folder. You can adjust the path to match the actual location of the login.js file in your project.











app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
