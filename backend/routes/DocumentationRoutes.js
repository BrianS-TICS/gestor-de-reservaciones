import express from 'express'
import {
    muestraInicio
} from '../controllers/DocumentacionController.js'

const router = express.Router()

router.get('/', muestraInicio);

export default router