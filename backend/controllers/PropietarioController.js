import Propietario from "../models/Propietario.js";

// * Guarda a un nuevo propietario
const registrar = async (req, res) => {
    const { nombre, email, telefono, password } = req.body


    // * Valida por correo duplicado
    const propietario = await Propietario.findOne({ email })

    if (propietario) {
        const error = new Error("Ya hay una cuenta existente con ese correo")
        return res.status(404).json({ msg: error.message })
    }

    try {
        const propietario = new Propietario(req.body)
        const PropietarioGuardado = await Propietario.create(propietario)
        res.json({ msg: { PropietarioGuardado } })

    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const obtener = async (req, res) => {
    const propietarios = await Propietario.find()

    try {
        res.status(404).json({ msg : propietarios})
    } catch (error) {
        
    }
}

export {
    registrar,
    obtener
}