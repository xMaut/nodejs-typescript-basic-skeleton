import { Router } from 'express'
import * as exampleController from '../controllers/example.controller'

const router = Router()

router.get("/person", exampleController.show);