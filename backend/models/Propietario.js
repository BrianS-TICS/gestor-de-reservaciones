import mongoose from "mongoose";
import generaID from "../helpers/generaID.js";

const PropietarioSchema = mongoose.Schema({
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
    token : {
        type : String
    },
    confirmado : {
        type : Boolean,
        default : false
    }

})

const Propietario = mongoose.model("Propietario", PropietarioSchema)
export default Propietario