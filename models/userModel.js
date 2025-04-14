'use strict'

import connection from "../data/connection.js";

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

function deleteUsefulInfos(user) {
    delete user.userPassword
    delete user.id
    delete user.createdAt
    delete user.updatedAt
}

/*
* method for retrieving a user according to its name.
* */
export const UserWithName = async (userName) => {
    try {
        if (typeof userName !== "string") {
            throw new Error("Invalid username!")
        }
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
