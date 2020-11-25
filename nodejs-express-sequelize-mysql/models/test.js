const {DataTypes, DATE} = require("sequelize");
const connection = require("../dbconnection");

const test = connection.sequelize.define('test', {
  id:{
    type: DataTypes.BIGINT,
    primaryKey:true,
    autoIncrement: true
  },
  data:{
    type: DataTypes.STRING,
    allowNull: false
  },
  value:{
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    tableName: 'test'
  }
)

exports.model = test;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class test extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   test.init({
//     id: DataTypes.BIGINT
//   }, {
//     sequelize,
//     modelName: 'test',
//   });
//   return test;
// };