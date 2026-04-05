const express = require("express")
const router = express.Router()
const userController = require('../controller/userController.js')

const authMiddleware = require("../middleware/authMiddleware.js")
router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/logout", userController.logout)

router.get("/profile", authMiddleware,(req,res)=>{
    if(req.user.role==='admin'){
        return res.json("Admin Dasbboard")
    }
    res.send("user dahsboard")
})
module.exports = router