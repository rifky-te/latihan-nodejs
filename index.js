import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5001;

// Route example
app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    console.log("[TEST]!");
    res.send("Hay, Inixindo!");
})

// Running port
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost: ${PORT}`);
});