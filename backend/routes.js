const express = require('express');

const Form1Model = require('./Form1Model');

const AwardCategoryModel = require('./AwardCategoryModel');
const LoginModel =require('./LoginModel');
const e = require('express');

const router = express.Router()

module.exports = router;

//Post Form 1 Data Method
router.post('/post-form1-data', async (req, res) => {

    try {

        const Form1Data_obj = new Form1Model({
            dataAwardCategorySelectionId: req.body.dataAwardCategorySelectionId,
            NameApplicant: req.body.NameApplicant,
            CertificateNumber: req.body.CertificateNumber
        });
        const dataToSave = await Form1Data_obj.save();
        res.status(200).json({ Message: "Data Saved Sucessfully!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// //Get all AwardCategory
router.get('/getAll-AwardCategory', async (req, res) => {
    try {
        const data = await AwardCategoryModel.find();
        // let AwardCategoryFilterData = null;
        // for(let i = 0;i<data.length;i++)
        // {
        //     AwardCategoryFilterData.push
        // }
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// //Post AwardCategory data
router.post('/post-AwardCategory', async (req, res) => {
    try {
        const AwardCategoryModel_obj = new AwardCategoryModel({
            name: req.body.name
        })
        const dataToSave = await AwardCategoryModel_obj.save();
        res.status(200).json({ Message: "Data Saved Sucessfully!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})
//login user data
router.post('/post-UserData', async (req, res) => {
    try {
        const LoginModel_obj = new LoginModel({
            Email: req.body.Email,
            Password: req.body.Password,
        })
        const dataToSave = await LoginModel_obj.save();
        res.status(200).json({ Message: "Data Saved Sucessfully!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})
router.post('/get-UserData', async (req, res) => {
    try {
        var query = { Email: req.body.Email,Password: req.body.Password };
        const getUserData = await LoginModel.find(query).clone();
        res.status(200).json({ getUserData });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// //Get by ID Method
// router.get('/getOne/:id', async (req, res) => {
//     try{
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })
// //Update by ID Method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(
//             id, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })
// //Delete by ID Method
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Model.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// //Get all Method
// router.get('/userLogin',async (req, res) => {
//     try{
//         var query = { email: req.body.email,password: req.body.password };
//         const data = await Model.find(query);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })