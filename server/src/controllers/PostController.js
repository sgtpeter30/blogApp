const mongoose = require('mongoose');
require('../models/Post');

const Post = mongoose.model('posts');

const post = {
  addPost: async (req, res) => {
    if (!req.user) {
      res.send({ error: 'You must be logged!' });
    }

    const newPostContent = {
      title: req.body.title,
      posted: Date.now(),
      shortContent: req.body.shortContent,
      fullContent: req.body.fullContent,
      author: req.user._id,
    };

    try {
      const newPost = await new Post(newPostContent).save((err, post) => {
        res.send(post);
      });
      console.log('Post saved:', newPost);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getAllPosts: (req, res) => {
    Post.find({})
      .then((results) => res.send(results))
      .catch((err) => console.log(err));
  },
  getSinglePost: (req, res) => {
    Post.findById(req.params.id)
      .then((results) => {
        if (!results) {
          res.send(404);
        } else {
          res.send(results);
        }
      })
      .catch((err) => res.send(404));
  },
  updatePost: (req, res) => {
    const updatePostContent = {
      title: req.body.title,
      posted: Date.now(),
      shortContent: req.body.shortContent,
      fullContent: req.body.fullContent,
    };
    Post.findByIdAndUpdate(req.params.id, updatePostContent)
      .then((updatedPost) => res.send(updatedPost))
      .catch((err) => console.log(err));
  },
  deletePost: (req, res) => {
    Post.findByIdAndDelete(req.params.id)
      .then((result) => {
        if (!result) {
          res.sendStatus(404);
        } else {
          res.sendStatus(200);
        }
      })
      .catch((err) => res.sendStatus(500));
  },
};

module.exports = post;
