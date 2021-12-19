const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;

        delete ret.password;
        delete ret._id;
      },
    },
  },
);

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', UserSchema);
