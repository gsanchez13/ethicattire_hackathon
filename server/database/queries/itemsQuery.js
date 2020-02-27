const db = require('../pgExport.js');

const getAllItems = async () => {
    const GETALLITEMSQUERY = `SELECT * FROM items`;
    const data = await db.any(GETALLITEMSQUERY);
    return data;
};
const postNewItem = async (item_img, fabric_id, clothes_id, user_id, color) => {
    const POSTNEWITEMQUERY = `INSERT INTO items(item_img, fabric_id, clothes_id, user_id, color) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const newItem = await db.any(POSTNEWITEMQUERY, [item_img, fabric_id, clothes_id, user_id, color]);
    return newItem;
};
const getAllItemsByTypeAndUser = async (user_id, clothes_id) => {
    const GETITEMSBYTYPEANDUSERQUERY = `SELECT * FROM items
    INNER JOIN fabrics ON items.fabric_id = fabrics.id
    INNER JOIN clothes ON items.clothes_id = clothes.id
    INNER JOIN users ON items.user_id = users.id
    WHERE items.user_id = $1 AND items.clothes_id = $2`
    const allItems = await db.any(GETITEMSBYTYPEANDUSERQUERY, [user_id, clothes_id]);
    return allItems;
}
const getAllItemsForFabric = async (fabric_id) => {
    const GETALLITEMSFORFABRICQUERY = `SELECT * FROM items
    INNER JOIN fabrics ON items.fabric_id = fabrics.id
    INNER JOIN users ON items.user_id = users.id
    WHERE fabrics.id =  $1`;
    const allItemsForFabric = await db.any(GETALLITEMSFORFABRICQUERY, [fabric_id]);
    return allItemsForFabric;
}
const getAllClothingTypes = async () => {
    const GETALLCLOTHINGTYPESQUERY = `SELECT * FROM clothes`;
    const allClothing = await db.any(GETALLCLOTHINGTYPESQUERY);
    return allClothing;
}
const getSusItemsCount = async (user_id) => {
    const SELECTCOUNTQUERY = `SELECT COUNT(*) FROM items INNER JOIN fabrics ON items.fabric_id = fabrics.id WHERE (items.user_id = $1) AND (score > 0)`
    const susItemsCount = await db.any(SELECTCOUNTQUERY, [user_id])
    return susItemsCount;
}

module.exports = {
    getAllItems,
    postNewItem,
    getAllItemsForFabric,
    getAllClothingTypes,
    getAllItemsByTypeAndUser,
    getSusItemsCount
};