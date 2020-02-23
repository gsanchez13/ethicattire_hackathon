const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const fabricsQuery = require('../database/queries')
 
=======
const fabricsQuery = require('../database/queries/fabricsQuery')

>>>>>>> 29ab767491683b31981ebb0362dc4b1c2dcf246c
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

