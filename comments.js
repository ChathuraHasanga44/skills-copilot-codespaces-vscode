// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');

// Create new comment
router.post('/', function(req, res, next) {
    var comment = new Comment({
        content: req.body.content
    });
}); // Added closing curly brace
