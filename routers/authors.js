const Author = require("../models/Author")

const router = require("express").Router()



// ! find the books and number of book and author details written by author 100

router.get("/", async(req,res)=>{
    try {

        const authors = await Author.aggregate([
            {
                $match:{
                    "_id":100
                }
            },

            {
                $lookup:{
                    from:"books",
                    localField:"_id",
                    foreignField:"author_id",
                    as:"author_details",
                    pipeline:[
                        {
                            $project:{
                                title:1,
                                genre:1
                            }
                        }
                    ]
                }
            },
            {
                $project:{
                    name:1,
                    birth_year:1,
                    author_details:1,
                    numberOfBook:{$size:"$author_details"}
                }
            }

        ])
        return res.json({length:authors.length,author:authors})
        
    } catch (error) {
        console.log("error",error)
    }
})




module.exports = router