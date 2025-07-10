// models/customer.js
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true, // Marking id as the primary key
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalmark: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    tamil: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    english: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    computer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    math: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    social: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    science: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Customer;
};
