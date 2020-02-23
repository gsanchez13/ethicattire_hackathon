const express = require('express');
const router = express.Router();

const fabricsQuery = require('../database/queries/fabricsQuery')

router.get('/', async(res, req, next) => {
    try {
        let data = await fabricsQuery.getAllFabrics()
        res.json({
            payload: data,
            msg: "all fabric received",
            err: false
        })
    } catch (error) {
        console.log("error", error);
    }
})

router.get('/:id', async(req, res, next) => {
    const id = req.params.id
    try {
        let data = await fabricsQuery.getFabricsById(id)
        res.json({
            payload: data,
            msg: "fabric by id received",
            err: false
        })
    } catch (error) {
        console.log("error", error)
    }
})

module.exports = router

