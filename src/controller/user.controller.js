import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const getUserById = async (req, res) => {
    const {uid} = req.params.uid;
    let result = await userService.getUserById(uid);
    res.send(result);
}

export const getUsers = async(req, res) => {
    let result = await userService.getUser();
    res.send(result);
}

export const saveUser = async (req, res) => {
    const user = req.body;
}

export const updateUser = async (req, res) => {
    
}

export const deleteUser = async (req, res) => {
    
}