const router = require("express").Router()



router.get("/", (req,res)=>{
    res.send("res succ")
})




module.exports = router