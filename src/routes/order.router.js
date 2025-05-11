import {Router} from 'express';
import {getOrders, getOrderById, saveOrder, updateOrder, deleteOrder} from '../controller/order.controller.js';

const router = Router();

//obtener Ordenes
router.get('/', getOrders);


//obtener un orden
router.get('/:oid', getOrderById);


//crear un orden
router.post('/', saveOrder);


//actualizar un orden
router.put('/:oid', updateOrder);


//borrar un orden
router.delete('/', deleteOrder);

export default router;