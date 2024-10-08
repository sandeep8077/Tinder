const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
    res.send(
        "Hello from the server"
    )
})


app.use("/test", (req, res) => {
    res.send(
        "Hello test  from the server"
    )
})

app.use((req, res) => {
    res.send(
        "Hello from the server"
    )
})
app.listen(3000, () => {
    console.log("Server is successfully running on port no 3000...");
})