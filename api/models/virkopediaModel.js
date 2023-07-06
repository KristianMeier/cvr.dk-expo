const mongoose = require('mongoose')

const virkopediaSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Virkopedias = mongoose.model('Virkopedias', virkopediaSchema)

module.exports = Virkopedias
