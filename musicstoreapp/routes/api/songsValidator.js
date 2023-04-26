const {check} = require('express-validator')
const {songsRepository} = require("../songs")

exports.songsValidatorInsert = [
    check('title','title is required').trim().not().isEmpty(),
    check('title','title must be 5 characters or more').trim().modulusLength({min:5}),
    check('kind','kind is required').trim().not().isEmpty(),
    check('kind','kind must be 5 characters or more').trim().modulusLength({min:3}),
    check('price','price is required').trim().not().isEmpty(),
    check('price','price must be a number').isNumeric(),
    check('price').custom(value =>{
        if(value < 0) {
            throw new Error('Price must be greathet than zero')
        }
        return true;
    })

]