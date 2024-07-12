const express = require('express');
const {createUser, getUser, deleteUser} = require('../controllers/userController');

const router = express.Router();

router.route('/create-user').post(createUser)
router.route('/get-user').get(getUser)
router.route('/delete-user/:id').delete(deleteUser);

module.exports = router;