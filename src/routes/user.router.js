
import {getUsers, getUserById, saveUser, updateUser, deleteUser} from '../controller/user.controller.js';
import Router from './js/router.js';



export default class userRouter extends Router {

    init() {

    //obtener ususarios
    this.get('/',["ADMIN"],  getUsers); // solo admin para que no publicar información sensible

    //obtener un usuario
    this.get('/:uid',["ADMIN"], getUserById); // solo admin para que no publicar información sensible

    //crear un usuario
    this.post('/',["PUBLIC"], saveUser);

    //actualizar un usuario
    this.put('/:uid',["PUBLIC"], updateUser);

    //borrar un usuario
    this.delete('/:uid',["ADMIN"], deleteUser); 
    }

}


