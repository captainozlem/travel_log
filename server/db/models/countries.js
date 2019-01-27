const Sequelize = require('sequelize');
const db = require('../db');

const Countries = db.define('countries', {
  city: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  continent: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  longitude: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  latitude: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: 'It is a beautiful country with welcoming people'
  }
});

module.exports = Countries;
