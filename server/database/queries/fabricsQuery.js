const db = require("./db");

const getAllFabrics = async() => {
    const data = await db.any("SELECT * FROM fabrics")
    return data
}

const getFabricsById = async (id) => {
    const getFabricQuery = `SELECT id, fabric_name from fabrics WHERE id = $1`
    const data = await db.any(getFabricQuery, [id]);
    return data
}

// const addNewFabric = async(fabric_name) => {
//     const addFabricQuery = `INSERT into fabric(fabric_name)
//                             VALUES($1)
//                             Returning id, fabric_name`
// }

module.exports = {
    getAllFabrics,
    // addNewFabric
    getFabricsById
}

