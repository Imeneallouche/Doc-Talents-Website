const express = require("express");
const connection = require("./DB/db_config");
const bodyParser = require('body-parser'); 
const encoder = bodyParser.urlencoded(); 
require("dotenv").config();
const dotenv = require("dotenv");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

//const SearchDoctorantRoute = require("./app/Routes/SearchDoctorantRoute");
//const chatRoutes = require("./routes/chatRoutes");
//const messageRoutes = require("./routes/messageRoutes");

//const { notFound, errorHandler } = require("./middleware/errorMiddleware");
//const path = require("path");

/*



*/

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/*



*/

/*
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
*/
/*















*/

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
  const sql = `SELECT * FROM Doctorant WHERE radie IS NULL AND soutenu IS NULL ORDER BY nom, prenom ASC`;
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




// app.get("/Connexion" , (req,res)=>{
//     res.render('Connexion.ejs');
// })


// app.post('/Connexion',encoder,(req,res)=>{
//   var email = req.body.email; 
//   var password = req.body.password; 
//   connection.query("SELECT * FROM DPGR where email = ? and password = ?" ,[email,password],function(error,results,fields){
//     if(results.length>0){
//         res.redirect("/Welcome"); 
//     } else{
//         res.redirect("/Connexion"); 
//     }
//     res.end(); 
//   })
// })


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



app.post("/RegisterDoctorant", (req, res) => {
  const { Nom, Prenom, Id_Doctorant, Id_PV, Numero_tel, Email, Birthday, Sex } =
    req.body;
  // TODO: Validate user input and save to database
  res.send("Registration successful!");
});

app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
