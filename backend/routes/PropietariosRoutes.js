import express from 'express'
import {
    registrar,
    obtener
} from '../controllers/PropietarioController.js'

const route = express.Router()


route.post('/', registrar)
route.get('/', obtener)






export default route