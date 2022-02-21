const express =require('express');
const router=express.Router();
const userController =require("../controllers/userController")
// /users/
router.get("/",userController.findAll);
// /users/ajkcbsakcjabsc
router.get("/:id",userController.findOne);

router.post("/",userController.create);

router.put("/:id",userController.update);

router.delete("/:id",userController.delete);


module.exports=router;