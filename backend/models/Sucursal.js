import mongoose from "mongoose";

const SucursalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    municipio: {
        type: String,
        required: true,
        trim: true
    },
    capacidad_personas: {
        type: Number,
        required: true
    },
    cantidad_mesas: {
        type: Number,
        required: true
    },
    // Relacion con horario = id_horario
    horario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Horario"
    }
},
    {
        timestamps: true
    })

const Sucursal = mongoose.model("Sucursal", SucursalSchema)
export default Sucursal