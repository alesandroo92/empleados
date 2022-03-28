const express = require("express");
const router = express.Router();
const { createSector } = require("../controllers/sectorController");
const { createEmpleado, getEmpleado, getEmpleadoById } = require("../controllers/empleadosController");
const {validateCreateEmpleados} = require("../validator/empleados");
const {validateCreateSector} = require("../validator/sector");


// Ruta sector
router.post("/crearSector", validateCreateSector, createSector);

// Ruta empleados
router.post("/crearEmpleado", validateCreateEmpleados, createEmpleado);
router.get("/empleados", getEmpleado);
router.get("/empleados/:id", getEmpleadoById);


module.exports = router;