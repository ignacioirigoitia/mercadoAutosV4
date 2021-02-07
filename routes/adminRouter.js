const express = require('express');
const router = express.Router();
const {index, carsList, carsCreate, carsEdit, carsStore, carsDelete, carsUpdate, register, processRegister, login, processLogin, listAdmins, profileAdmin, logout} = require('../controllers/adminController');


/* MIDDLEWARES */
const upload = require('../middlewares/subidaImagenes');
const adminCheck = require('../middlewares/adminCheck');


/* VALIDACIONES */
const registerAdminValidator = require('../validations/registerAdminValidator');
const loginAdminValidator = require('../validations/loginAdminValidator');


router.get('/',adminCheck, index);

//entidad administradores

router.get('/register',register);
router.post('/register',registerAdminValidator, processRegister);

router.get('/login',login);
router.post('/login',loginAdminValidator, processLogin);

router.get('/logout',logout);

router.get('/list',listAdmins);
router.get('/profile/:id',profileAdmin);


//entidad autos
router.get('/autos/list',adminCheck,carsList);

router.get('/autos/create',adminCheck, carsCreate);
router.post('/autos/store',upload.any(),carsStore);

router.get('/autos/edit/:id',adminCheck,carsEdit);
router.put('/autos/update/:id',carsUpdate);

router.delete('/autos/delete/:id',carsDelete);


module.exports = router;