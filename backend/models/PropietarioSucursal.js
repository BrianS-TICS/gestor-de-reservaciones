import mongoose from "mongoose";

const PropietarioSucursalSchema = mongoose.Schema({
    propietario: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Propietario"
    },
    Sucursal : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Sucursal"
    },
})

const PropietarioSucursal = mongoose.model("PropietarioSucursal", PropietarioSucursalSchema)
export default PropietarioSucursal