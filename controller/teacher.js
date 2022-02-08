const Teacher = require('../models/teacher');
const bcrypt = require('bcrypt');

exports.signup = async(req, res) => {
    try {
        var {name, email, password, branch, sections} =  req.body;
        const ifteacher = await Teacher.findOne({email});

        if(ifteacher)
            res.status(200).json({success: false, message: 'teacher Already Exists'});

        password = await bcrypt.hashSync(password , 10);

        const newteacher = new Teacher({name, email, password, branch, sections});
        
        const teacher = await newteacher.save();

        res.status(200).json({success: true, teacher, token:teacher.generateJWT()});

    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error', messages: error.message});
    }
}

exports.login = async(req, res) => {
    try {
        const { email, password} =  req.body;
        const teacher = await Teacher.findOne({ email });

        if (!teacher)
            return res.status(200).send({ success: false, message: 'teacher Not Found'});

        if (!teacher.compareOtp(password))
            return res.status(200).send({ success: false, message: 'Invalid Password' });

        res.status(200).json({success: true, teacher, token:teacher.generateJWT()});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error', messages: error.message})
    }
}

exports.profile = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}