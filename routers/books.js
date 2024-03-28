const Book = require("../models/Book")

const router = require("express").Router()



//! video 7 
//! aggregation pipeline

router.get("/", async(req,res)=>{
    try {

        const books = await Book.aggregate([
            {
                $lookup:{
                    from:"authors",
                    localField:"author_id",
                    foreignField:"_id",
                    as:"author_details"
                }
            },
            {
                $addFields:{
                    author_details:{
                        // $first:"$author_details"
                        $arrayElemAt:["$author_details",0]
                    }
                }
            },

           
            
        // const books = await Book.find({}).populate('author_id')

        ])
        return res.json({length:books.length,books:books})
        
    } catch (error) {
        console.log("error",error)
    }
})




module.exports = router