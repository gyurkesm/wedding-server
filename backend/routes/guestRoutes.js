const express = require('express');
const router = express.Router();
const { 
  getGuests, 
  setGuest, 
  updateGuest, 
  deleteGuest
} = require('../controllers/guestsController')

router.route('/').get(getGuests).post(setGuest);

router.route('/:id').put(updateGuest).delete(deleteGuest);

module.exports = router;