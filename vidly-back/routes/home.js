const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // pug templating engine.
    res.render("index",{ title: 'My express app', message: "hello"});
});

module.exports = router;