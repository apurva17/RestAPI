const express = require('express');

const app = express();
app.use(express.json());

const logs = [
    {
        email: 'admin@mergemaster.com',
        password: '123456'
    },
    {
        email: 'apurva@mergemaster.com',
        password: '123456'
    },
    {
        email: 'admin@infovision.com',
        password: '123456'
    },
    {
        email: 'user@mergemaster.com',
        password: '123456'
    },
    {
        email: 'user1@brand1.com',
        password: '12345'
    },
    {
        email: 'admin@tfs.com',
        password: '12345'
    },
    {
        email: 'admin@lfs.com',
        password: '12345'
    },
    {
        email: 'user2@brand2.com',
        password: '98765'
    },
    {
        email: 'nithesh@gmail.com',
        password: '121212'
    },
];


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/authentication', (req, res) => {
    res.send(logs);
});


app.post('/api/authentication', (req, res) => {

    const log = {
        email: req.body.email,
        password: req.body.password,

    };

    let resLog = {
        email: '',
        password: ''
    }

    const res1 = logs.map((item) => {
        if (item.email == log.email && item.password == log.password) {
            resLog.email = log.email;
            resLog.password = log.password;
        }

    })

    res.send(resLog);
});


// app.post('/api/authentication',(req,res)=>{
//     const con=Array({result:0},{result:1});
// const randomCon=con[Math.floor(Math.random()*con.length)];

// res.send(randomCon);
// });



// app.post()

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));