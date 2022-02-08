const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const validate = require('../middlewares/validator');
const student = require('../controller/student');
const authenticate = require('../middlewares/studentAuth');

router.post('/studentsignup',[
    check('name').not().isEmpty().withMessage({success: false, message: 'name is Required'}),
    check('email').not().isEmpty().withMessage({success: false, message: 'email is Required'}),
    check('password').not().isEmpty().withMessage({success: false, message: 'password is Required'}),
    check('branch').not().isEmpty().withMessage({success: false, message: 'branch is Required'}),
    check('section').not().isEmpty().withMessage({success: false, message: 'section is Required'}),
], validate, student.signup);



router.post('/studentlogin',[
    check('email').not().isEmpty().withMessage({success: false, message: 'email is Required'}),
    check('password').not().isEmpty().withMessage({success: false, message: 'password is Required'})
], validate, student.login);


router.get('/studentProfile', authenticate, student.profile);


module.exports = router;