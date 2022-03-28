const express = require("express");
const app = express();
const router = require("./routes/router");
const { sequelize } = require("./models/index");
const morgan = require("morgan");


require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.use(router);



app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto: "+process.env.PORT);

    sequelize.authenticate().then(() => {
        console.log("Conectado exitosamente a la base de datos");
    });
});




