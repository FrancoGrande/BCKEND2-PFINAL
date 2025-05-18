import {Router} from 'express';
import {getProduct, getProductById, createProduct, addproduct, updateProduct, deleteProduct} from '../controller/product.controller.js';

const router = Router();

//obtener productos
router.get('/', getProduct);


//obtener un un producto
router.get('/:pid', getProductById);


//crear producto
router.post('/', createProduct);


router.post('/', addproduct);


//actualizar un producto
router.put('/', updateProduct);


//borrar un producto
router.delete('/', deleteProduct);

export default router;