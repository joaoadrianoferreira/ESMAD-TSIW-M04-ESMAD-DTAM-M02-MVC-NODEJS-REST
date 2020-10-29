var express = require('express')
var router = express.Router()
var controller = require('./controller')
const { validationResult, check } = require('express-validator')

router.get('/',  function (req, res) {
    controller.list(); 
})

router.post('/', [
    check('name').notEmpty().escape(), 
    check('age').isNumeric(),
],  function (req, res) {
    const erros = validationResult(req); 
    if (erros.isEmpty()) {
        controller.create(); 
    } else {
        res.status(404).json({erros: erros.array()})
    }
})

module.exports = router