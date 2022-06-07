const { Model } = require('sequelize');
//const db=require('../config/config');
const { response } = require('express');
const db = require('../config/config');
const employee = db.employee;

exports.add = function (req, res, next) {
    //console.log({ test: "1", status: "OK" });
    //console.log(employee);
    const response = "Good boy";

    res.send({
        firstName: "Amol",
        lastName: "Bodkhe",
        email: "amolbodkhe487@hgmail.com",
        salary: "50000",
        mobile: "9309730724"
    })

}

exports.addEmployee = async function (req, res, next) {
    try {
        // let data = await employee.create({
        //     firstname: "Rakesh",
        //     lastname: "kulkarni",
        //     mobile: "7887877979",
        //     email: "amol@12gmail.com",
        //     address: "noida",
        //     salary: "37000"
        // });

        let data = await employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            salary: req.body.salary
        });

        //console.log(data, "AMOL");

        await res.status(200).json({ message: 'Emplyee added successfully', emplyee: data });
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error occured', error: JSON.stringify(e) });
    }
}


exports.getAllEmployee = async function (req, res, next) {
    try {
        let data = await employee.findAll();
        //console.log(data);
        res.send(data);
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error occured', error: JSON.stringify(e) });
    }
}



exports.updateEmployee = async function (req, res, next) {

    try {

        await employee.update(
            {
                //req.headers.params.id,
                //firstname:req.body.firstname,
                //lastname:req.body.lastname,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                mobile: req.body.mobile,
                email: req.body.email,
                address: req.body.address,
                salary: req.body.salary
            },
            {
                returning: true,
                where: { id: req.body.id }
                //where:{id: req.headers.params.id}
            }
        ).then((data) => {
            res.status(200).json({ message: 'Record updated Successfully', data});

        })
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error occured', error: JSON.stringify(e) });
    }
}

exports.deleteEmployee = async function (req, res, next) {
    try {
        //alert(req.body.id);
        console.log('req.parqms',req.params);
        await employee.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (deletedRecord) {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Deleted successfully" });
            }
            else {
                res.status(404).json({ message: "record not found" })
            }
        })

    }
    catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error Occured', error: JSON.stringify(e) });
    }
}




// const update=function(req,res,next)
// {
//     console.log({test:"1",status:"OK"});
//     res.send({
//         firstName:"Amol",
//         lastName:"Bodkhe",
//         email:"amolbodkhe487@gmail.com",
//         salary:"50000",
//         mobile:"9309730724"
//     }).json(response);
//}



