const Virkopedias = require('../models/virkopedia-model')

const virkopediaController = () => ({
  getVirkopedias: async (req, res) => {
    try {
      const virkopedias = await Virkopedias.find({})
      res.status(200).json(virkopedias)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  createVirkopedias: async (req, res) => {
    try {
      const virkopedias = await Virkopedias.create(req.body)
      res.status(200).json(virkopedias)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },
})

module.exports = virkopediaController
