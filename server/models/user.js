var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    first: {
      type: String,
      required: [true, "First name must not be blank"],
    },
    last: {
      type: String,
      required: [true, "Last name must not be blank"],
    },
    user: {
      type: String,
      required: [true, "User name must not be blank"],
      unique: [true, "User name already exists, choose a new one or login"]
    }
  },
  email: {
    type:String,
    required: [true, "Email must not be blank"],
    unique:[true, "That Email is already registered, please login instead"]
  },
  birthday:{
    type: Date,
    required: [true, "Must provide birthdate"]
  },
  password: {
    type: String,
    required: [true, "You need a password to log in"],
    minlength: [4, "password must be at least 4 characters long"]
  }
},{
  timestamps:true
});

mongoose.model("User", UserSchema);
