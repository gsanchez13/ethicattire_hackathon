const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users')

router.get('/user/:id', async (req, res) => {
    try {
        let user = req.params.user_id
        let response = await userQueries.getUserById(user)
        res.status(200).json({
            payload: response,
            msg: "Success getting user",
            err: false
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            payload: null,
            msg: "Failure retrieving user",
            err: true
        })
    }
})

router.post('/signUp') = async (req, res) => {

    try {
        let userInfo = {
            username: req.body.username,
            password: req.body.password,
            style: req.body.style
        }
        let newUser = await userQueries.createNewUser(userInfo);
        res.status(200).json({
            payload: null,
            msg: "Success adding a new user",
            err: false
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            payload: null,
            msg: "Failure adding a new user",
            err: true
        })
    }
}

module.exports = router;
