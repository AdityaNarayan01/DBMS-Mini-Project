const express = require('express');
const {check} = require('express-validator');

const router = express.Router();
const validate = require('../middlewares/validator');
const test= require('../controller/test');
const teacherauthenticate = require('../middlewares/teacherAuth');
const studentauthenticate = require('../middlewares/studentAuth');

//Student test

router.post('/submittest', studentauthenticate, [
    check('testId').not().isEmpty().withMessage({success: false, message: 'testId is Required'}),
    //More will required
], validate, test.submittest);

router.get('/testmarks', studentauthenticate, [
    check('testId').not().isEmpty().withMessage({success: false, message: 'testId is Required'}),
], validate, test.testmarks);


//teacher test

router.post('/assignTest', teacherauthenticate, [
    check('isduration').not().isEmpty().withMessage({success: false, message: 'isduration is Required'}),
    check('duration').not().isEmpty().withMessage({success: false, message: 'duration is Required'}), //not reuired
    check('startDate').not().isEmpty().withMessage({success: false, message: 'startDate is Required'}),
    check('endDate').not().isEmpty().withMessage({success: false, message: 'endDate is Required'}),
    check('isBranchSpecific').not().isEmpty().withMessage({success: false, message: 'isBranchSpecific is Required'}),
    check('branch').not().isEmpty().withMessage({success: false, message: 'branch is Required'}), //not reuiqred
    check('section').not().isEmpty().withMessage({success: false, message: 'section is Required'}),
    check('question.title').not().isEmpty().withMessage({success: false, message: 'Question title is Required'}),
    check('question.questionType').not().isEmpty().withMessage({success: false, message: 'questionType is Required'}), //not required
    check('question.totalMcq').not().isEmpty().withMessage({success: false, message: 'totalMcq is Required'}),
    check('question.mcqQuestions').not().isEmpty().withMessage({success: false, message: 'mcqQuestions is Required'}),
    check('question.totalMarks').not().isEmpty().withMessage({success: false, message: 'totalMarksis Required'}),
    check('question.mcqQuestions.*.mcqTitle').not().isEmpty().withMessage({success: false, message: 'mcqTitle is required'}),
    check('question.mcqQuestions.*.answer').not().isEmpty().withMessage({success: false, message: 'answer is required'}),
    check('question.mcqQuestions.*.mcqtype').not().isEmpty().withMessage({success: false, message: 'mcqtype is required'}),
    check('question.mcqQuestions.*.marks').not().isEmpty().withMessage({success: false, message: 'marks is required'}),
], validate, test.assignTest);

router.post('updatetest', teacherauthenticate, [
    check('testId').not().isEmpty().withMessage({success: false, message: 'testId is Required'}),
    check('isduration').not().isEmpty().withMessage({success: false, message: 'isduration is Required'}),
    check('duration').not().isEmpty().withMessage({success: false, message: 'duration is Required'}), //not reuired
    check('startDate').not().isEmpty().withMessage({success: false, message: 'startDate is Required'}),
    check('startDate').not().isEmpty().withMessage({success: false, message: 'startDate is Required'}),
    check('isBranchSpecific').not().isEmpty().withMessage({success: false, message: 'isBranchSpecific is Required'}),
    check('branch').not().isEmpty().withMessage({success: false, message: 'branch is Required'}), //not reuiqred
    check('section').not().isEmpty().withMessage({success: false, message: 'section is Required'}),
    check('question.title').not().isEmpty().withMessage({success: false, message: 'Question title is Required'}),
    check('question.questionType').not().isEmpty().withMessage({success: false, message: 'questionType is Required'}), //not required
    check('question.totalMcq').not().isEmpty().withMessage({success: false, message: 'totalMcq is Required'}),
    check('question.mcqQuestions').not().isEmpty().withMessage({success: false, message: 'mcqQuestions is Required'}),
    check('question.totalMarks').not().isEmpty().withMessage({success: false, message: 'totalMarksis Required'}),
    check('question.mcqQuestions.*.mcqTitle').not().isEmpty().withMessage({success: false, message: 'mcqTitle is required'}),
    check('question.mcqQuestions.*.answer').not().isEmpty().withMessage({success: false, message: 'answer is required'}),
    check('question.mcqQuestions.*.mcqtype').not().isEmpty().withMessage({success: false, message: 'mcqtype is required'}),
    check('question.mcqQuestions.*.marks').not().isEmpty().withMessage({success: false, message: 'marks is required'}),
], validate, test.updatetest);

router.post('deletetest', teacherauthenticate, [
    check('testId').not().isEmpty().withMessage({success: false, message: 'testId is Required'}),
], validate, test.deletetest);

router.get('testResult', teacherauthenticate, [
    check('testId').not().isEmpty().withMessage({success: false, message: 'testId is Required'}),
], validate, test.testResult);


module.exports = router;