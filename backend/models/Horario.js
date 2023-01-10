import mongoose from "mongoose";

const HorarioSchema = mongoose.Schema({
    lunes: {
        type: Date,
        default: null,
    },
    martes: {
        type: Date,
        default: null,
    },
    miercoles: {
        type: Date,
        default: null,
    },
    jueves: {
        type: Date,
        default: null,
    },
    viernes : {
        type : Date,
        default : null
    },
    sabado : {
        type : Date,
        default : false
    },
    domingo : {
        type : Date,
        default : false
    }

})

const Horario = mongoose.model("Horario", HorarioSchema)
export default Horario