const { check, validationResult } = require("express-validator");

const validateCreateEmpleados = [
  check("nombre").exists().not().isEmpty().isString().withMessage('Ingrese un nombre correcto'),
  check("apellido").exists().not().isEmpty().isString().withMessage('Ingrese un apellido correcto'),
  check("idSector").exists().not().isEmpty().isNumeric().withMessage('Ingrese un id correcto'),
  
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(403).send({ errors: err.array() });
  }
};

module.exports = {validateCreateEmpleados}