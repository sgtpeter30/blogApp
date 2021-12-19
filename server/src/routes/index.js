const express = require('express');
const { user, post } = require('../controllers');

const router = express.Router();

router.post('/api/user/login', user.userLogin);
router.post('/api/user/logout', user.userLogout);
router.post('/api/user/register', user.userRegister);
router.get('/api/user/current', user.currentUser);

router.get('/api/posts', post.getAllPosts);
router.get('/api/posts/:id', post.getSinglePost);

router.post('/api/posts', post.addPost);
router.put('/api/posts/:id', post.updatePost);
router.delete('/api/posts/:id', post.deletePost);

module.exports = router;
