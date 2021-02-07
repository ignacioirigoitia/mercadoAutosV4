const express = require('express');
const router = express.Router();

const {search,index,show} = require('../controllers/autosController');

router.get('/',index);
router.get('/show/:id',show);
router.get('/search',search);






module.exports = router;