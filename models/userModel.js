'use strict'

import connection from "../data/connection.js";
import deleteUsefulInfos from '../middlewares/cleaner.js'

/**
 * Function to retrieve all the user inside the db.
 * */
export const Users = async () => {
    try {
        const [users] = await connection.query("select * from user")
        /*console.log("user retrieve successfully!")*/
        return users.map((user) => {
            deleteUsefulInfos(user)
            return user
        })
    } catch (e) {
        console.log(`error: ${new Error(e.message)}`)
        throw new Error(`Error while fetching all user: ${e}`)
    }
}

/**
* method for retrieving a user according to its name.
* */
export const UserWithName = async (userName) => {
    try {
        const [user] = await connection.query('select * from user where userName = ?', userName)
        return user.map((user) => {
            deleteUsefulInfos(user)
            return user
        })
    } catch (e) {
        console.error(`[UserService] Error fetching user ${userName}:`, e);
        throw new Error(`Error fetching user with name: ${e}`);
    }
}

/**
 * Function to get a user base on its email.
 * */
export const UserWithEmail = async (email) => {
    try {
        const [user] = await connection.query('select * from user where userEmail = ?', email);
        if (user[0]) {
            deleteUsefulInfos(user[0])
        }
        return user[0]
    } catch (e) {
        throw new Error(`Error fetching user with email: ${e}`);
    }
}

/**
 * this function is used to return a user by its id.
 * */
export const UserId = async (userId) => {
    try {
        const [user] = await connection.query('select * from user where user_id = ?', userId)
        deleteUsefulInfos(user[0])
        return user[0]
    } catch (e) {
        throw `Error fetching user with id ${userId}`
    }
}

/**
 * Function to create a new user.
 * */
export const UserCreate = async (user) => {
    try {
        const {
            userName,
            userEmail,
            userPassword,
            userCity,
            userStatus
        } = user
        await connection.query(
            'insert into user (userName, userEmail, userPassword, userCity, userStatus) values(?, ?, ?, ?, ?)', [userName, userEmail, userPassword, userCity, userStatus]
        )
        return await UserWithEmail(userEmail)
    } catch (e) {
        throw new Error(`Error while creating user: ${e}`);
    }
}

/**
* this function is responsible for updating the picture of the user
* */
export const UpdateUserPicture = async (userId, userProfilePicture) => {
    try {
        await connection.query('update user set userProfilePicture = ? where user_id like ?', [userProfilePicture, userId]);
        return await UserId(userId)
    } catch (e) {
        throw new Error(`Error while resetting the user picture: ${e}`)
    }
}

/**
* this function is responsible for updating the user country
* */
export const UpdateUserCountry = async (userId, userCountry) => {
    try {
        await connection.query('update user set userCountry = ? where user_id like ?', [userCountry, userId]);
        return await UserId(userId)
    } catch (e) {
        throw new Error(`Error while resetting the country: ${e}`)
    }
}

/**
* this function is responsible for updating the user phone number
* */
export const UpdateUserPhone = async (userId, userPhone) => {
    try {
        await connection.query('update user set userPhone = ? where user_id like ?', [userPhone, userId]);
        return await UserId(userId)
    } catch (e) {
        throw new Error(`Error while resetting phone number: ${e}`)
    }
}

/**
* this function is responsible for updating the user status
* */
export const UpdateUserStatus = async (userId, userStatus) => {
    try {
        await connection.query('update user set userStatus = ? where user_id like ?', [userStatus, userId]);
        return await UserId(userId)
    } catch (e) {
        throw new Error(`Error while resetting user status: ${e}`)
    }
}

/**
* this function is responsible for updating the user password
* */
export const ResetPassword = async (userId, userPassword) => {
    try {
        await connection.query('update user set userPassword = ? where user_id like ?', [userPassword, userId]);
        return await UserId(userId)
    } catch (e) {
        throw new Error(`Error while resetting password: ${e}`);
    }
}

/**
 * Function to delete a user based on its email or id.
 * */
export const UserDelete = async (id) => {
    // todo: implement this later.
    // delete from user where userName like "Manager1";
    // put it in a commit:
    // begin; delete from user where userName like "Manager1"; commit;
}

/**
 * this function is responsible for checking if an user
 * do exist inside the database.
 * */
export const UserCheck = async (userId) => {
    // todo: implement this function later.
}
