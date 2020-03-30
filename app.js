const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    requireTLS: true,
    port: 587,
    auth: {
        user: "ggjunglemailer@gmail.com",
        pass: "yslweljwxvjluwmu"
    }, tls: {
        rejectUnauthorized: false
    }
});

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({credentials: true, origin: true}))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/sendMail', (req, res) => {
    const {email = ' ', content = ' '} = req.body
    if (!email.trim() && !content.trim() && !position.trim()) {
        res.status(400).end('Email or Content is empty')
    }
    console.log(req.body)
    const mailOptions = {
        from: email,
        to : 'lychautrinha@gmail.com',
        subject : 'Sending From Landing Page',
        text : content.substr(0, 1000)
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if (error){
            console.log(error);
            res.status(500).end("error");
        } else {
            console.log("Message sent: " + response);
            res.status(200).end("sent");
        }
    });
})

app.post('/sendCV', (req, res) => {
    const {email = ' ', message = ' ', name=' ', position=' '} = req.body

    const replytext = `<div>
    <p><b>Tên:</b> ${name}</p><p>
    <p><b>Vị trí ứng tuyển:</b> ${position}</p><p>
    <p><b>Email:</b> ${email}</p><p>
    <p><b>Tin nhắn:</b> ${message}</p><p>
    </div>`;

    const mailOptions = {
        from: email,
        to : 'lychautrinha@gmail.com',
        subject : 'Sending From Landing Page',
        html: replytext,
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if (error){
            console.log(error);
            res.status(500).end("error");
        } else {
            console.log("Message sent: " + response);
            res.status(200).end("sent");
        }
    });
})

const server = app.listen(3000, () => {
    console.log('Server listen on port:', 3000)
})

server.setTimeout(5*60*1000);