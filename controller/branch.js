const Branch = require('../models/branch');


exports.addBranch = async(req, res) => {
    try {
        const {branchName, totalSections} =  req.body;

        const ifbranch = await Branch.findOne({branchName});

        if(ifbranch)
            res.status(200).json({success: false, message: 'Branch is Already Exists'});

        const newBranch = new Branch({branchName, totalSections});
        const branch = await newBranch.save();

        res.status(200).json({success: true, branch});
        
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}

exports.getBranch = async(req, res) => {
    try {
        const branch = await Branch.find({});
        res.status(200).json({success: true, branch});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server Error'})
    }
}
