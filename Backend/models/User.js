const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  address: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;
