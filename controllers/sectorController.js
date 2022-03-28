const { Sector } = require("../models/index");

const createSector = async (req, res) => {
    try {
      const {sector} = req.body;
      const newSector = await Sector.create({ sector: sector });
      res.status(200).json({
        msg: `Se creo correctamente el sector`,
        data: newSector
    });
      
    } catch (error) {
        res.status(404).json({error});
    }
}

module.exports = {createSector};