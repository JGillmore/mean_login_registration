var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/the_wall');

require('../models/user');
