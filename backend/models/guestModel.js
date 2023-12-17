const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'PLS add a name value']
  },
  email: {
    type: String,
    required: [true, 'Pls, add an email']
  },
  vname: {
    type: String,
  },
  vemail: {
    type: String,
  },
  message: {
    type: String,
  },
  music: {
    type: String,
  }
},
{
  timestamps: true,
}
)

module.exports = mongoose.model('Guest', guestSchema)