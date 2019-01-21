const Sequelize = require('sequelize');
const db = require('../db');

const Countries = db.define('countries', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  continent: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lng: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  lat: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'It is a beautiful country with welcoming people'
  },
  image: {
    type: Sequelize.TEXT
  }
});

module.exports = Countries;
