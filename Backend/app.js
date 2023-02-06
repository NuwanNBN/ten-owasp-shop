import express from "express";
import { getUsers, getUser, createUser } from "./database.js";

const app = express();
app.use(express.json());

//Get all users
app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

//Get one User
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  res.send(user);
});

//Post a user
app.post("/createuser", async (req, res) => {
  const { uname, pass } = req.body;
  const user = await createUser(uname, pass);
  //res.status(201).send(note);
  res.send(user);
});

//Express Error Check
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(8080, () => {
  console.log("Server run on port 8080");
});
