// * Dependencias
import mongoose from "mongoose";

// * Helpers
import generarID from "../helpers/generaID.js"

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    imagenUrl : {
        type: String,
    },
    token : {
        type : String,
        default : generarID()
    },
    confirmado : {
        type : Boolean,
        default : false
    }

})

const Usuario = mongoose.model("Usuario", usuarioSchema)
export default Usuario