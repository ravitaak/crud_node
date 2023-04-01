const express = require('express');
require("./config");
const User = require('./users');
const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
    let data = new User(req.body);
    const result = await data.save();
    resp.send(result);
});

app.get("/list", async (req, resp) => {
    let data = await User.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await User.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    let data = await User.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

app.listen(5000)