import {Router} from 'express';
import {getBusiness, getBusinessById, createBusiness, addproduct, updateBusiness, deleteBusiness} from '../controller/business.controller.js';

const router = Router();

//obtener productos
router.get('/', getBusiness);


//obtener un un poroducto
router.get('/:bid', getBusinessById);



router.post('/', createBusiness);


router.post('/', addproduct);


//actualizar un producto
router.put('/', updateBusiness);


//borrar un producto
router.delete('/', deleteBusiness);

export default router;