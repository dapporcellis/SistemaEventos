'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patrocinio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Evento,{
        foreignKey:'eventoId',
        as: 'evento'
      })
    }
  }
  Patrocinio.init({
    nome: DataTypes.STRING,
    site: DataTypes.STRING,
    logo: DataTypes.STRING,
    eventoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patrocinio',
  });
  return Patrocinio;
};