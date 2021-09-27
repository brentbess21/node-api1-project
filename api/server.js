// BUILD YOUR SERVER HERE

//imports
const express = require('express');
const User = require('./users/model');

//instance of express app 
const server = express ()

//global middleware
server.use(express.json())

//endpoints
server.get('/api/users', async (req, res)=> {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {

      res.status(500).json({
          message: "The user information could not be retrieved"
      })

    }
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
