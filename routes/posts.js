const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');

//*********************************************************** 
// Return all items

router.get('/', controller.getAllPosts);

//*********************************************************** 
// Get a specific item by custom id

router.get('/:postId', controller.getPostById);

//*********************************************************** 
// Create a new item

router.post('/', controller.createPost);

//*********************************************************** 
// Delete a specific item

router.delete('/:postId', controller.deletePost);

//*********************************************************** 
// Update existing item

router.patch('/:postId', controller.updatePost);

module.exports = router;