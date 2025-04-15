import {
    Users,
    UserWithName
} from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users()
        return res.status(202).json({ users: users })
    } catch (e) {
        res.status(500).json({ error: e.message })
        console.log(`error: ${new Error(e.message)}`)
    }
}

export const getUserByName = async (req, res) => {
    try {
        const { username }  = req.params
        if (!username) {
            return res.status(404).json({ error: "User with name required" })
        }
        const user = await UserWithName(username)
        if (user.length === 0) {
            return res.status(404).json({ message: `user ${username} not found!`})
        }
        return res.status(200).json({ user })
    } catch (e) {
        console.log(`error: ${new Error(e.message)}`)
        return res.status(500).json({ error: e.message })
    }
}

export const getUserByEmail = async (req, res) => {
    // todo: implementing the retrieval of a user based on its email
}

export const createUser = async (req, res) => {
    // todo: implement the creation of a user
}

export const updateUser = async (req, res) => {
    // todo: implement the updating of a user based on an id
}

export const resetPassword = async (req, res) => {
    // todo: implement this later;
}

export const registerUser = async (req, res) => {
    // todo: implement this later.
}

export const deleteUser = async (req, res) => {
    // todo: implement this later.
}