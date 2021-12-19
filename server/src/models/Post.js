const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  posted: {
    type: Date
  },
  shortContent: {
    type: String,
    required: true
  },
  fullContent: {
    type: String,
    required: true
  },
  author: {
    type: String,
    reqiured: true
  }
});

mongoose.model("posts", PostSchema);
