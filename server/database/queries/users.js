const db = require('../pgExport')

const addNewUser = async (user) => {
        const newUserQuery = `
		INSERT INTO users(username, password, style)
			VALUES($/username/, $/password/, $/style/)
			RETURNING id, username, style
	`
        const newUser = await db.one(newUserQuery, user)
        return newUser;
   
}

const getUserById = async (user_id) => {
        const user = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [user_id])
        return user;
    
}

module.exports = {

    addNewUser,
    getUserById
}
