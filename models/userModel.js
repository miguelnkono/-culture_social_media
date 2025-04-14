
'use strict'

import connection from "../data/connection.js";

export const Users = async () => {
    try {
        const [users] = await connection.query("select * from user")
        console.log("user retrieve successfully!")
        return users
    } catch (e) {
        console.log(`error: ${new Error(e.message)}`)
    }
}

