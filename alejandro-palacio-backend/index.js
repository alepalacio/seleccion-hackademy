const express = require('express');
const morgan = require('morgan');

//Initialization
const app = express();

//Database connection
const mongoose = require('mongoose');
const user = 'alepal';
const password = 'alepal';
const dbname = 'backend';
const uri = `mongodb+srv://${user}:${password}@hackademymx.6cegg.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
        .then(() => console.log('Database successfully connected'))
        .catch(error => console.log(error))

//Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use(require('./routes/index'));
app.use('/pets', require('./routes/index'));

//Server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});