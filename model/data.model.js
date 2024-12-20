const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Data', DataSchema);
