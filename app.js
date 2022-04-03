const express = require("express");
const app = express();
const router = require("./routes/router");
const { sequelize } = require("./models/index");
const morgan = require("morgan");
const cors = require("cors");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Method', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET', 'POST', 'OPTIONS', 'PUT', 'DELETE');
    next();
})


require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.use(router);
app.use(cors());



app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto: "+process.env.PORT);

    sequelize.authenticate().then(() => {
        console.log("Conectado exitosamente a la base de datos");
    });
});




