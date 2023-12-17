const asyncHandler = require("express-async-handler");

const Guests = require('../models/guestModel');

// @desc  Get guests
// @route GET /api/guests
// @access  Private
const getGuests = asyncHandler(async (req, res) => {
  const guests = await Guests.find()
  res.status(200).json(guests);
});

// @desc  Set guest
// @route POST /api/guest
// @access  Private
const setGuest = asyncHandler(async (req, res) => {

  const guest = await Guests.create({
    name: req.body.name,
    email: req.body.email,
    vname: req.body.vname,
    vemail: req.body.vmail,
    message: req.body.message,
    music: req.body.music,

  })
  res.status(200).json({ message: guest });
});

// @desc  Update guest
// @route PUT /api/guest/:id
// @access  Private
const updateGuest = asyncHandler(async (req, res) => {
  const guest = await Guests.findById(req.params.id)

  if(!guest) {
    res.status(400)
    throw new Error('Guest not found');
  }
  const updatedGuest = await Guest.findByIdAndUpdate(req.params.id, req.body,
    {
    new: true,
  })
  res.status(200).json({ message: `Update Guest with id=${req.params.id}` });
});

// @desc  Delete guest
// @route DELETE /api/guest/:id
// @access  Private
const deleteGuest = asyncHandler(async (req, res) => {
  const guest = await Guests.findById(req.params.id)

  if(!guest) {
    res.status(400)
    throw new Error('Guest not found');
  }

  await guest.deleteOne();

  res.status(200).json({ message: `Delete Guest with id=${req.params.id}` });
});

module.exports = {
  getGuests,
  setGuest,
  updateGuest,
  deleteGuest
}