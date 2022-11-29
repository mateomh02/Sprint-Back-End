import { Router } from 'express';
import * as registerCtrl from '../controllers/registercontroller'

const router = Router();

router.post('/', registerCtrl.newRegister)

router.get('/', registerCtrl.findAllRegisters)

export default router