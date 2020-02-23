const db = require('../pgExport.js');

const getAllItems = async () => {
    const GETALLITEMSQUERY = `SELECT * FROM items`;
        const data = await db.any(GETALLITEMSQUERY);
        return data;
};
const postNewItem = async(item_img, fabric_id, clothes_id, user_id, color) => {
    const POSTNEWITEMQUERY = `INSERT INTO items(item_img, fabric_id, clothes_id, user_id, color) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const newItem = await db.any(POSTNEWITEMQUERY, [item_img, fabric_id, clothes_id, user_id, color]);
        return newItem;
};

const getAllItemsForFabric = async (fabric_id) => {
    const GETALLITEMSFORFABRICQUERY = `SELECT * FROM items
    INNER JOIN fabrics ON items.fabric_id = fabrics.id
    INNER JOIN users ON items.user_id = users.id
    WHERE fabric.id =  $1`;
    const allItemsForFabric = await db.any(GETALLITEMSFORFABRICQUERY, [fabric_id]);
    return allItemsForFabric;
}

module.exports = {
    getAllItems,
    postNewItem,
    getAllItemsForFabric
};