import Propietario from "../models/Propietario.js";

// * Guarda a un nuevo propietario
const registrar = async (req, res) => {
    const { nombre, email, telefono, password } = req.body


    // * Valida por correo duplicado
    const propietario = await Propietario.findOne({email})

    if (propietario) {
        const error = new Error("Ya hay una cuenta existente con ese correo")
        res.status(404).json({ msg: error.message })
    }

    try {
        const propietario = new Propietario(req.body)
        const PropietarioGuardado = await Propietario.save()
        res.json({ msg: { PropietarioGuardado } })

    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export {
    registrar
}