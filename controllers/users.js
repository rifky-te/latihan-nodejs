import {v4 as uuidv4} from "uuid";

let users = [];

// GET all data user
export const getUsers = (req, res) =>{
    res.send(users);
};

// CREATE data user
export const createUser = (req, res) =>{
    const user = req.body;
    users.push({... user, id: uuidv4()});
    res.send(`User with name ${user.nama} added to database`);
};

// GET data id
export const getUserDetail = (req, res) =>{
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

// DELETE data user
export const deleteUser = (req, res) =>{
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} deleted from database!`);
};

// UPDATE data user
export const updateUser = (req, res) =>{
    const { id } = req.params;
    const {nama, email, usia} = req.body;
    const user = users.find((user) => user.id === id);

    if (nama) user.nama = nama;
    if (email) user.email = email;
    if (usia) user.usia = usia;

    res.send(`User with id ${id} already updated!`);
};