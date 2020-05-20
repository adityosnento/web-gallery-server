const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config()

app.set('port', process.env.PORT || 4000);

// express middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use(cors())
app.use(morgan('tiny'))
const router = require('./router')
app.use(router)

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: 'Welcome to api'
  })
})


app.listen(app.get('port'));
console.log('Server on port ', app.get('port'));

module.exports = app