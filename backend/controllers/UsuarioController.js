// * Modelos
import Usuario from "../models/Usuario.js"

// * Guarda a un nuevo usuario
const registrar = async (req, res) => {
    const { nombre, email, telefono, password } = req.body


    // * Valida por correo duplicado
    const usuario = await Usuario.findOne({email})

    if (usuario) {
        const error = new Error("Ya hay una cuenta existente con ese correo")
        res.status(404).json({ msg: error.message })
    }

    try {
        const usuario = new Usuario(req.body)
        const usuarioGuardado = await usuario.save()
        res.json({ msg: { usuarioGuardado } })

    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const autenticar = async (req, res) => {

}

const confirmar = async (req, res) => {

}

const muestraPerfil = (req, res) => {
    res.send("Mostrando perfil")
}

export {
    registrar,
    muestraPerfil,
    autenticar,
    confirmar
}