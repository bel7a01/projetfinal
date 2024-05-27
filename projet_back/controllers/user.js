const UserSchema = require("../models/user")
const UserValidation = require("../validation/user")



const createUser = async (req, res) => {
    console.log(req.body);
    let { error, value } = UserValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    try {
        let newUser = await UserSchema.create(req.body)
        res.status(201).json(newUser)

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: "error while creating User" })
    }

}


const GetAllUsers = async (req, res) => {
    try {
        let Users = await UserSchema.find()
        res.status(200).json(Users);
    } catch (e) {
        res.status(500).json({ message: "error retrieving Users" })
    }

}


const getUserById = async (req, res) => {
    let UserId = req.params.id

    try {
        let user = await UserSchema.findById(UserId)
        res.json(user)
    } catch (e) {
        return res.status(400).json({ message: "No user with id " + UserId })
    }

}

const updateUserByid = async (req, res) => {
    const UserId = req.params.id;

    let { error, value } = UserValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }
    try {
        console.log(value);
        const User = await UserSchema.findByIdAndUpdate(UserId, value, { new: true })
        res.json(User)
    } catch (e) {
        return res.status(404).json({ message: "user not found wrong id" });
    }
}

const deleteUserById = async (req, res) => {
    let UserId = req.params.id;
    try {
        let user = await UserSchema.findByIdAndDelete(UserId)
        res.json({ message: "deleted element with id " + UserId })
    } catch (e) {
        res.status(404).json({ message: "no  user with id " + UserId })
    }

}

module.exports = {
    GetAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUserByid
}