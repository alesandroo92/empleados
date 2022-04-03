const { Empleados } = require("../models/index");
const { Sector } = require("../models/index");

const createEmpleado = async (req, res) => {
    try {
      const {nombre, apellido, idSector} = req.body;
      const newEmpleado = await Empleados.create({ 
          nombre: nombre,
          apellido: apellido,
          idSector: idSector
         });
      res.status(200).json({
        msg: `Se creo correctamente el empleado`,
        data: newEmpleado
    });
      
    } catch (error) {
        res.status(404).json({error});
    }
}


const getEmpleado = async (req, res) => {
    const empleados = await Empleados.findAll({
        include: [{ model: Sector }],
    });
  
    res.status(200).send({empleados});
};

const getEmpleadoById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const empleado = await Empleados.findOne({
        where: { id },
        include: [{ model: Sector, attributes: [ "sector" ] }],
        
    });
    if(!empleado) {
        res.status(404).send("Empleado no encontrado")
    } else {
        res.status(200).send({ message: "Empleado encontrado correctamente", data: empleado })
    }
    } catch (err) {
      res.status(500).send("Hubo el siguiente error: "+err);
    }
  };


module.exports = {createEmpleado, getEmpleado, getEmpleadoById};