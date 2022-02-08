const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const validate = require('../middlewares/validator');
const teacher= require('../controller/teacher');
const authenticate = require('../middlewares/teacherAuth');

router.post('/teachersignup',[
    check('name').not().isEmpty().withMessage({success: false, message: 'name is Required'}),
    check('email').not().isEmpty().withMessage({success: false, message: 'email is Required'}),
    check('password').not().isEmpty().withMessage({success: false, message: 'password is Required'}),
    check('branch').not().isEmpty().withMessage({success: false, message: 'branch is Required'}),
    check('sections').not().isEmpty().withMessage({success: false, message: 'sections is Required'}),
], validate, teacher.signup);



router.post('/teacherlogin',[
    check('email').not().isEmpty().withMessage({success: false, message: 'email is Required'}),
    check('password').not().isEmpty().withMessage({success: false, message: 'password is Required'})
], validate, teacher.login);

router.get('/teacherProfile', authenticate, teacher.profile);

module.exports = router;