const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
    type: String,
    trim: true,
    required: true
  },
  email: { 
    type: String,
    trim: true,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);