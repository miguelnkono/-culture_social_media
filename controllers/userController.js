import {
    ResetPassword, UpdateUserCountry, UpdateUserPhone, UpdateUserPicture, UpdateUserStatus,
    UserCreate,
    Users, UserWithEmail,
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
        // todo: need to validate the {username} before sending it to the service layer.
        const user = await UserWithName(username)
        if (user.length === 0) {
            return res.status(404).json({ message: `user ${username} not found!`})
        }
        return res.status(200).json({ user })
    } catch (e) {
        // todo: improve the error handling
        console.log(`error: ${new Error(e.message)}`)
        return res.status(500).json({ error: e.message })
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const { useremail: email } = req.params
        if (!email) {
            return res.status(404).json({ error: "User email required" })
        }

        const user = await UserWithEmail(email)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        return res.status(200).json({ user })
    } catch (e) {
        // todo: implement better error handling.
        return res.status(500).json({ error: e.message })
    }
}

export const createUser = async (req, res) => {
    // todo: implement the creation of a user
    try {
        const {
            userName,
            userEmail,
            userPassword,
            userCity,
            userStatus
        } = req.body

        // todo: implement validation for these fields before passing them to the service layer
        const validatedUser = {
            userName,
            userEmail,
            userPassword,
            userCity,
            userStatus
        }
        const newUser = await UserCreate(validatedUser)
        return res.status(200).json({ message: "user inserted successfully", user: newUser })
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}

/*
* this function is responsible for updating all the required fields of a user.
* */
export const updateUser = async (req, res) => {
    try {
        // todo: implement the updating of a user based on an id
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

/*
 * Function to update a user according to the need of the user.
 * */
export const userUpdate = async (req, res) => {
    try {
        const { userPicture, userStatus, userCountry, userPhone, userPassword} = req.query
        const { id: userId } = req.params

        let newUser
        let message = 'updated';

        // chain the query parameters
        if (userPicture) {
            newUser = await UpdateUserPicture(userId, userPicture)
            message += " user picture,"
        }
        if (userStatus) {
            newUser = await UpdateUserStatus(userId, userStatus)
            message += " user status,"
        }
        if (userCountry) {
            newUser = await UpdateUserCountry(userId, userCountry)
            message += " user country,"
        }
        if (userPhone) {
            newUser = await UpdateUserPhone(userId, userPhone)
            message += " user phone number,"
        }
        if (userPassword) {
            newUser = await ResetPassword(userId, userPassword)
            message += " user password successful"
        }
        return res.status(200).json({ message: message, newUser })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}



export const registerUser = async (req, res) => {
    try {
        const {
            userName,
            userEmail,
            userPassword,
            userCity,
            userStatus
        } = req.body

        // todo: implement validation for these fields before passing them to the service layer
        const validatedUser = {
            userName,
            userEmail,
            userPassword,
            userCity,
            userStatus
        }
        const newUser = await UserCreate(validatedUser)
        return res.status(200).json({ message: "user inserted successfully", user: newUser })
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}

export const deleteUser = async (req, res) => {
    // todo: implement this later.
}
