const express = require('express');
const router = express.Router();
const itemsQueries = require('../database/queries/itemsQuery.js');


router.get('/', async (req, res, next) => {
  try {
    let allItems = await itemsQueries.getAllItems();
    res.status(200)
      .json({
        payload: allItems,
        msg: "All items retrieved.",
        err: false
      })
  }
  catch (err) {
    res.json({
      payload: null,
      msg: "All items not retrieved",
      err: true
    })
  }
});

router.post('/', async (req, res, next) => {
  const { item_img, fabric_id, clothes_id, user_id, color } = req.body;
  try {
    let postedItem = await itemsQueries.postNewItem(item_img, fabric_id, clothes_id, user_id, color);
    res.status(200)
      .json({
        payload: postedItem,
        msg: "Item posted.",
        err: false
      })
  }
  catch (err) {
    console.log(err)
    res.json({
      payload: null,
      msg: "Item not posted.",
      err: true
    })
  }
});

router.get('/types', async (req, res, next) => {
  try {
    let allClothingTypes = await itemsQueries.getAllClothingTypes();
    res.status(200)
      .json({
        payload: allClothingTypes,
        msg: "All clothing types retrieved.",
        err: false
      })
  }
  catch (err) {
    console.log(err)
    res.json({
      payload: null,
      msg: "All clothing types not retrieved.",
      err: true
    })
  }
});

router.get('/count/:user_id', async (req, res, next) => {
  try {
    let itemCount = await itemsQueries.getSusItemsCount(req.params.user_id);
    res.status(200).json({
      payload: itemCount,
      msg: "all sustainable clothing received",
      err: false
    })
  } catch (err) {
    console.log(err)
    res.json({
      payload: null,
      msg: "All items not retrieved.",
      err: true
    })
  }
});

router.get('/:fabricId', async (req, res, next) => {
  let fabric_id = req.params.fabricId;
  try {
    let allItemsForFabric = await itemsQueries.getAllItemsForFabric(fabric_id);
    res.status(200)
      .json({
        payload: allItemsForFabric,
        msg: "All items for fabric retrieved.",
        err: false
      })
  }
  catch (err) {
    console.log(err)
    res.json({
      payload: null,
      msg: "All items not retrieved.",
      err: true
    })
  }
});



router.get('/user/:user_id/clothes/:clothes_id', async (req, res, next) => {
  const { user_id, clothes_id } = req.params;
  try {
    let usersClothing = await itemsQueries.getAllItemsByTypeAndUser(user_id, clothes_id);
    res.status(200)
      .json({
        payload: usersClothing,
        msg: "All items for user by clothing type.",
        err: false
      })
  }
  catch (err) {
    console.log(err);
    res.json({
      payload: null,
      msg: "Could not retrieve items for user.",
      err: true
    })
  }
});

module.exports = router;
