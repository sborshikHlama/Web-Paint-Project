const cors = require('cors')
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000"
}))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
app.post('/save-image', (req, res) => {
    
    const data = req.body.image
    const buffer = Buffer.from(data, 'base64');

    fs.writeFile('images/image.png', buffer, (err) => {
        if (err) {
            throw  res.send('Ups, something went wrong');
        }
        return res.send('SUCCES');
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});