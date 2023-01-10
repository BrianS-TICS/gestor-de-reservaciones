import express from 'express'
import { 
    registrar,
    muestraPerfil,
    autenticar,
    confirmar
 } from '../controllers/UsuarioController.js'

const router = express.Router()

// * Guarda usuario
router.post('/', registrar)

// * Confirma token generado la creacion del modelo
router.post('/confirmar/:token', confirmar)


router.get('/perfil', muestraPerfil)
router.get('/login', autenticar)

export default router;