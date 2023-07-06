const express = require('express')
const mongoose = require('mongoose')
const Companies = require('./models/companyModel')
const Virkopedias = require('./models/virkopediaModel')
const Users = require('./models/userModel')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 9000

const connectionString =
  'mongodb+srv://admin:admin@devtaminapi.xmsqbyi.mongodb.net/?retryWrites=true&w=majority'

//routes

app.get('/', (req, res) => {
  res.send('Heeelloooo. This is an API for my cvr.dk mockup')
})

// Companies
app.get('/companies', async (req, res) => {
  try {
    const companies = await Companies.find({})
    res.status(200).json(companies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.get('/companies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const company = await Companies.findById(id)
    res.status(200).json(company)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/companies', async (req, res) => {
  try {
    const companies = await Companies.create(req.body)
    res.status(200).json(companies)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.put('/companies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const companies = await Companies.findByIdAndUpdate(id, req.body)
    if (!companies) {
      return res
        .status(404)
        .json({ message: `cannot find any company with ID ${id}` })
    }
    const updatedProduct = await Companies.findById(id)
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.delete('/companies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const company = await Companies.findByIdAndDelete(id)
    if (!company) {
      return res
        .status(404)
        .json({ message: `cannot find any company with ID ${id}` })
    }
    res.status(200).json(company)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// This router can't be /companies/delete-all because it will be the same as the /companies/:id router
app.delete('/companies-delete-all', async (req, res) => {
  try {
    const companies = await Companies.deleteMany({})
    res.status(200).json(companies)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

// Virkopedias
app.post('/virkopedias', async (req, res) => {
  try {
    const virkopedias = await Virkopedias.create(req.body)
    res.status(200).json(virkopedias)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.get('/virkopedias', async (req, res) => {
  try {
    const virkopedias = await Virkopedias.find({})
    res.status(200).json(virkopedias)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Users
app.get('/users', async (req, res) => {
  try {
    const users = await Users.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const users = await Users.findById(id)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/users', async (req, res) => {
  try {
    const users = await Users.create(req.body)
    res.status(200).json(users)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.put('/users/:id', async (req, res) => {
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
})

app.delete('/users/:id', async (req, res) => {
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
})

// This can't be /users/delete-all because it will be the same as the /users/:id router
app.delete('/users-delete-all', async (req, res) => {
  try {
    const users = await Users.deleteMany({})
    res.status(200).json(users)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

mongoose.set('strictQuery', false)
mongoose
  .connect(connectionString)
  .then(() => {
    console.log('connected to MongoDB')
    app.listen(port, () => {
      console.log(`Node API app is running on port ${port}}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
