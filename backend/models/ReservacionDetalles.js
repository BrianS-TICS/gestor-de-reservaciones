import mongoose from "mongoose";

const ReservacionDetallesSchema = mongoose.Schema({
    // Relacion con reservacion = id_reservacion
    reservacion : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Reservacion'
    },
    // Relacion con reservacion usuario = id_usurio
    usuario : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    cantidad_mesas : {
        type : Number,
        required : true
    },
    cantiadad_personas : {
        type : Number,
        required : true
    },
    consumo_estimado : {
        type : Number,
        required : false
    }
},
{
    timestamps: true
})

const ReservacionDetalles = mongoose.model("ReservacionDetalles", ReservacionDetallesSchema)
export default ReservacionDetalles