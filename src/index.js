import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/User.js";
import "./models/follower.js";


async function init() {
    try {
        await sequelize.authenticate()
        .then(() => {
            console.log('conexion exitosa.');
        })
        .catch(err => {
            console.error('No se pudo conectar a la base de datos:', err);
        });

        await sequelize.sync({ force: true });


    app.listen(3000, () => {
        console.log('El servidor está corriendo en el puerto 3000');
    });
    }catch (error) {
    console.log('Error al iniciar la aplicación:', error);
    }
}


init();