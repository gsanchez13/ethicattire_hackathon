const db = require('../pgExport')

const addNewUser = async (user) => {
        const newUserQuery = `
		INSERT INTO users(username, password_digest, style)
			VALUES($/username/, $/password_digest/)
			RETURNING id, username
	`
        const newUser = await db.one(newUserQuery, user)
        return newUser;
   
}

const getUserById = async (user_id) => {
        const user = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [user_id]);
        return user;
    
}

const getUserByUsername = async (username) => {
    const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [username]);
    return user;
}

module.exports = {
    addNewUser,
    getUserById,
    getUserByUsername
}