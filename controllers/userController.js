import {Users, UserWithName} from "../models/userModel.js";

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
        const { username }  = req.query
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