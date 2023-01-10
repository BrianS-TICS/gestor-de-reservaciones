// * Dependecias
import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/database.js";

// * Rutas
import usuarioRoutes from './routes/UsuarioRoutes.js'
import propietarioRoutes  from './routes/PropietariosRoutes.js'
import documentacionRoutes from './routes/DocumentationRoutes.js'

// * Da las funcionalidades de express a una variable
const app = express()

// * Habilita la lectura de datos tipo json
app.use(express.json())

// * Habilita la lectura de variables de entorno
dotenv.config()

// * Habilita la conexion a la base de datos
conectarDB()

// * Da la opcion de administrar las rutas 
// * Usuarios
app.use('/api/usuario', usuarioRoutes)

// * Propietarios
app.use('/api/propietario', propietarioRoutes)

// * Documentacion de api
app.use('/api/', documentacionRoutes)

// ? Pendientes rutas para todos los modelos
// app.use('/api/clientes', clienteRoutes)

// * Se establece un puerto para la ejecucion del servidor
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Servidor funcionando en puesto 4000")
})
