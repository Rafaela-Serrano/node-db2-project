const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = () => {
  
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
}
