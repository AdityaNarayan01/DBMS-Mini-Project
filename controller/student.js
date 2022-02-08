const Student = require('../models/student');
const bcrypt = require('bcrypt');

exports.signup = async(req, res) => {
    try {
        const {name, email, password, branch, section} =  req.body;
        const ifStudent = await Student.findOne({email});

        if(ifStudent)
            res.status(200).json({success: false, message: 'Student Already Exists'});

        password = await bcrypt.hashSync(password , 10);

        const newStudent = new Student({name, email, password, branch, section});
        
        const student = await newStudent.save();

        res.status(200).json({success: true, student, token:user.generateJWT()});

    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

exports.login = async(req, res) => {
    try {
        const { email, password} =  req.body;
        const student = await User.findOne({ email });

        if (!student)
            return res.status(200).send({ success: false, message: 'Student Not Found'});

        if (!student.compareOtp(password))
            return res.status(200).send({ success: false, message: 'Invalid Password' });

        res.status(200).json({success: true, student, token:user.generateJWT()});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}


exports.profile = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

