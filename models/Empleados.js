'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empleados.belongsTo(models.Sector, {foreignKey: "idSector", target_Key: "idSector"})
    }
  }
  Empleados.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    idSector: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empleados',
  });
  return Empleados;
};