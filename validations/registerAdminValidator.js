const {check, validationResult, body} = require('express-validator');
const {getAdmins} = require('../data/admins')
const admins = getAdmins();

module.exports = [
    check('username')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),

    check('username')
    .isLength({
        min:3,
        max:20
        })
    .withMessage('La contraseña debe tener un min de '),

    check('pass')
    .notEmpty()
    .withMessage('La constraseña es requerida'),

    check('pass')
    .isLength({
        min:3,
        max:8
        })
    .withMessage('Uno nombre de más de 3 letras por favor!'),

    body('username').custom(value => {
        let result = admins.find(admin => admin.username.toLowerCase() === value.toLowerCase().trim());

        if(result){
            return false
        }else {
            return true
        }
    }).withMessage('El usuario ya está registrado!')
    
    ]