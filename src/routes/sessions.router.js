import Router from './js/router.js';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserModel from '../dao/models/user.model.js';

export default class SessionRouter extends Router{


    init(){
        this.post('/login', ["PUBLIC"], async (req, res) => {
            const {email, password} = req.body;
            try{
                const user = await UserModel.findOne({ email, password })

                    let token = jwt.sign( user , config.secret_JWT, {expiresIn : "24h"});
                    res.sendSuccess(token);
            }catch(error){
                console.log(error);
                res.sendUserError("Credenciales inválidas");
            }
        });
    }
}