import {Router} from 'express';
import {getOrderById, createOrder} from '../controller/order.controller.js';

const router = Router();

//obtener ordenes
router.get('/:oid', getOrderById);


//crear orden
router.post('/', createOrder);


export default router;