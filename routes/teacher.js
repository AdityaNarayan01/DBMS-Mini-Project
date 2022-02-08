const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const validate = require('../middlewares/validator');
const teacher= require('../controllers/teacher');
const authenticate = require('../middlewares/teacherauthenticate');

router.post('/teachersignup',[
    check('name').not().isEmpty().withMessage({success: false, message: 'name is Required'}),
    check('email').not().isEmpty().withMessage({success: false, message: 'email is Required'}),
    check('password').not().isEmpty().withMessage({success: false, message: 'password is Required'}),
    check('branch').not().isEmpty().withMessage({success: false, message: 'branch is Required'}),
    check('section').not().isEmpty().withMessage({success: false, message: 'section is Required'}),
], validate, teacher.signup);



router.post('/teacherlogin',[
    check('email').not().isEmpty().withMessage({success: false, message: 'email is Required'}),
    check('password').not().isEmpty().withMessage({success: false, message: 'password is Required'})
], validate, teacher.login);

router.get('/teacherProfile', authenticate, teacher.profile);

module.exports = router;