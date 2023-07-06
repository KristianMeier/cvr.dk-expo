const mongoose = require('mongoose')

const companiesSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      required: [true, 'Please enter a cvr number'],
    },
    cvrNumber: {
      type: String,
    },
    companyName: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
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
  },
  {
    timestamps: true,
  }
)

const Companies = mongoose.model('Companies', companiesSchema)

module.exports = Companies
