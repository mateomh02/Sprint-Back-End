import { Router } from 'express';
import * as orderCtrl from '../controllers/orderscontroller'

const router = Router();

router.post('/creacionOrden', orderCtrl.newOrder)

router.get('/', orderCtrl.findAllOrders)

router.delete('/:id', orderCtrl.deleteOrder)

router.get('/:id', orderCtrl.findOneOrder)

router.put('/actualizar/:id', orderCtrl.updateOrder)

export default router