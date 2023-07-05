const mongoose = require('mongoose')

const companiesSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: false,
    },
    cvrNumber: {
      type: String,
      required: [false, 'Please enter a cvr number'],
      //   required: [true, 'Please enter a cvr number'],
    },
    companyName: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
      //   default: 'copenhagen',
    },
    postNoCity: {
      type: String,
      required: false,
    },
    companyType: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
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

const Companies = mongoose.model('Companies', companiesSchema)

module.exports = Companies
