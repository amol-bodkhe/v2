const express=require("express");
const router=express.Router();

//Routes foor CRUD
const ctrlEmp=require('../controller/ctrlcrud');
router.post('/add',ctrlEmp.add);
router.post('/addEmployee',ctrlEmp.addEmployee);
router.get('/getAllEmployee',ctrlEmp.getAllEmployee);
router.put('/updateEmployee',ctrlEmp.updateEmployee);
router.delete('/deleteEmployee/:id',ctrlEmp.deleteEmployee);

module.exports=router;
