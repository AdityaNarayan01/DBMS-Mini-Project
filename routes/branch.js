const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const validate = require('../middlewares/validator');
const Branch = require('../controller/branch');


router.post('/branch',[
    check('branchName').not().isEmpty().withMessage({success: false, message: 'branchName is Required'}),
    check('totalSections').not().isEmpty().withMessage({success: false, message: 'totalSections is Required'})
], validate, Branch.addBranch);

router.get('/branch', Branch.getBranch);


module.exports = router;