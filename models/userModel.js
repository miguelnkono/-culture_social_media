'use strict'

import connection from "../data/connection.js";
import deleteUsefulInfos from './utils/cleaner.js'

/**
 * Function to retrieve all the user inside the db.
 * */
export const Users = async () => {
    try {
        const [users] = await connection.query("select * from user")
        console.log("user retrieve successfully!")
        return users.map((user) => {
            deleteUsefulInfos(user)
            return user
        })
    } catch (e) {
        console.log(`error: ${new Error(e.message)}`)
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
        throw new Error('Failed to fetch user');
    }
}

/**
 * Function to get a user base on its email.
 * */
export const UserWithEmail = async (email) => {
    // todo: implement this later.
}

/**
 * Function to create a new user.
 * */
export const UserCreate = async (user) => {
    // todo: implement this later
}

/**
 * Function to update a user.
 * */
export const UserUpdate = async (newUser) => {
    // todo: implement this later.
}

/**
 * Function to delete a user based on its email or id.
 * */
export const UserDelete = async (id) => {
    // todo: implement this later.
}
