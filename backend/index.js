import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

mongoose
.connect('mongodb://localhost:27017',{
    dbName: 'anurag',
})
.then(() => console.log('Connected to MongoDB'))
.catch((e) => console.log('Error connecting to MongoDB:', e));

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Message = mongoose.model('Message', messageSchema);

const app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
    res.sendFile("index.html");
});

app.get('/success', (req, res) => {
    res.render("success");
});

app.get('/add' , (req, res) => {
    Message.create({
        name: "Anurag",
        email: "a@gmail.com"}).then(() => {
            res.send("Message added successfully");
        })
});

app.post('/contact', (req, res) => {
    const messageData = { username: req.body.username, email: req.body.email };
    console.log("Received message data:", messageData);
    
    res.redirect('/success');
});

app.post('/', (req, res) => {
    console.log(req.body);
});
    

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
