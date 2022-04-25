import express from "express";
//import {v4 as uuid4} from "uuid";
import {
    getUsers, createUser, getUserDetail, deleteUser, updateUser
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUserDetail);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;




























// Dummy data users Testing
// const users = [
//     {
//     "nama": "Rifky Te",
//     "email": "rifkyte.coder@gmail.com",
//     "usia": 28
//     },
// ];

//let users = [];

// GET all data users
// router.get('/', (req, res) => {
//     //res.send("Hay, users"); // Testing on postman
//     res.send(users);
// });

// GET Detail user with ID
// router.get('/:id', (req, res) => {
//     //res.send("GET id user"); Testing on postman
//     const { id } = req.params;
//     const foundUser = users.find((user) => user.id === id);
//     res.send(foundUser);
// })

// UPDATE user data
// router.patch('/:id', (req, res) => {
//     //res.send("PATCH request to homepage"); // Testing on postman
//     const { id } = req.params;
//     const {nama, email, usia } = req.body;
//     const user = users.find((user) => user.id === id);

//     if (nama) user.nama = nama;
//     if (email) user.email = email;
//     if (usia) user.usia = usia;

//     res.send(`User with id ${id} already changed`);

// });

// DELETE id users
// router.delete('/:id', (req, res) => {
//     //res.send('DELETE request to homepage'); // Testing on postman
//     const { id } = req.params;
//     users = users.filter((user) => user.id !== id);
//     res.send(`User with id ${id} deleted from database`);
// });

// Testing
// router.post('/', (req, res) => {
//     console.log("POST routex is reached!");
//     // read data post from postman <JSON>
//     console.log(req.body);
//     res.send("POST route is reached !");
// });

// POST create
// router.post('/', (req, res) => {
//    const user = req.body;
//    //users.push(user);
//    users.push({... user, id:uuid4() });
//    res.send(`User dengan nama ${user.nama} ditambahkan ke database!`);
//    console.log(req.body);
// });

//export default router;