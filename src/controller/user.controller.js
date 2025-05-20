import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const getUserById = async (req, res) => {
    const {uid} = req.params;
    try{
        let result = await userService.getUserById(uid);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al obtener usuario", error});
    }

}

export const getUsers = async (req, res) => {
    try {
    let result = await userService.getUser();
    res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al obtener usuarios", error});
    }
}

export const saveUser = async (req, res) => {
    const user = req.body;
    try{
        let result = await userService.saveUser(user);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al crear usuario", error});
    }
}

export const updateUser = async (req, res) => {
    const {uid} = req.params;
    const user = req.body;
    try {
        let result = await userService.updateUser(uid,user);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al actualizar usuario", error});
    }

}

export const deleteUser = async (req, res) => {
    const {uid} = req.params;
    try{
        let result = await userService.deleteUser(uid);
        res.send({status: "success", result});
    } catch (error) {
        res.status(400).send({status: "error", message: "error al eliminar usuario", error});
    }
    
}