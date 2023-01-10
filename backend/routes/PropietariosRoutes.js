import express from 'express'
import {
    guardaPropietario
} from '../controllers/PropietarioController.js'

const route = express.Router()


route.post('/', guardaPropietario)






export default route