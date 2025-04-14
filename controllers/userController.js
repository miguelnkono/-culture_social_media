import { Users } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users()
        return res.status(200).json({ users: users })
    } catch (e) {
        console.log(`error: ${new Error(e.message)}`)
    }
}