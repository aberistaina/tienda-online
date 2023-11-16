import { app } from "./src/app.js"
import { sequelize } from "./src/database/db.js"

const PORT = 3000

//Models
import "./src/models/Productos.models.js";
import "./src/models/Usuarios.models.js"

const main = async() =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: false, alter: false})
        app.listen(PORT, () =>{
            console.log(`Servidor escuchando en puerto: ${PORT}`)
        })
    } catch (error) {
        
    }
}

main()