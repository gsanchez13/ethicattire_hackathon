const db = require("../pgExport");

const getAllFabrics = async() => {
    const getAllFabricsQuery = `SELECT * FROM fabrics`
    const data = await db.any(getAllFabricsQuery)
    return data
}

const getFabricsById = async (id) => {
    const getFabricQuery = `SELECT * from fabrics WHERE id = $1`
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

