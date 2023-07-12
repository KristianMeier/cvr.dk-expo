const Users = require('../models/user-model')

const userController = () => ({
  getUsers: async (req, res) => {
    try {
      const users = await Users.find({})
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.params
      const users = await Users.findById(id)
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  createUser: async (req, res) => {
    try {
      const users = await Users.create(req.body)
      res.status(200).json(users)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params
      const users = await Users.findByIdAndUpdate(id, req.body)
      if (!users) {
        return res
          .status(404)
          .json({ message: `cannot find any company with ID ${id}` })
      }
      const updatedProduct = await Users.findById(id)
      res.status(200).json(updatedProduct)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params
      const users = await Users.findByIdAndDelete(id)
      if (!users) {
        return res
          .status(404)
          .json({ message: `cannot find any company with ID ${id}` })
      }
      res.status(200).json(company)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },

  deleteAllUsers: async (req, res) => {
    try {
      const users = await Users.deleteMany({})
      res.status(200).json(users)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ message: error.message })
    }
  },
})

module.exports = userController
