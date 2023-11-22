//require("dotenv").config();
const mongoose = require("mongoose");

const express = require('express');
const app = express();
const port = 3000;

console.log("env var")
console.log(process.env.MONGODB_URI)

mongoose
    .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});

const Student = mongoose.model('Student', studentSchema);



const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});

stud.save().then(() => console.log("One entry added"), (err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})