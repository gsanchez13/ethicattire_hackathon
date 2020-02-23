const db = require('../pgExport')

const addNewUser = async (user) => {
    try {
        const newUserQuery = `
		INSERT INTO users(username, password, style)
			VALUES($/username/, $/password/, $/style/)
			RETURNING id, username, style
	`
        const newUser = await db.one(newUserQuery, user)
        return newUser;
    } catch (err) {
        console.log(err)
    }
}

const getUserById = async (username) => {
    try {

        const user = await db.oneOrNone("SELECT * FROM users WHERE id = $1", [username])
        return user;
    } catch (err) {
        console.log(err)
    }
}

module.exports = {

    addNewUser,
    getUserById
}
