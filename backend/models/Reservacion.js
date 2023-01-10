import mongoose from "mongoose";

const ReservacionSchema = mongoose.Schema({
    vigente: {
        type: Boolean,
        default : true
    },
    fecha_reservacion: {
        type: Date,
        required: true,
    },
     // Relacion con sucursal = id_sucursal
    sucursal : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Sucursal"
    }
},
{
    timestamps: true
})

const Reservacion = mongoose.model("Reservacion", ReservacionSchema)
export default Reservacion