const User = require("../models/User")

const router = require("express").Router()


//! video 1

//! how many users are activce

// router.get("/", async(req,res)=>{
//      try {
//         const users = await User.aggregate([
//             {
//                 $match:{
//                     isActive:false
//                 }
//             },
//             {
//                 $count:"activeUsers"
//             }
//         ])

//     return res.json({length:users.length,users:users})
//      } catch (error) {
//         console.log('error',error)
//      }
// })




//! videos 2 and 3

// router.get("/",async(req,res) =>{
//     try {
//         //! what is the average age of  users
        // const users = await User.aggregate([
        //     {
        //        $group:{
        //         _id:null,
        //         averageAge:{
        //             $avg:"$age"
        //         }
        //        }
        //     }
        // ])


//         //! list the top 5/2 most common favorite fruits among user

        // const users = await User.aggregate([
        //     {
        //        $group:{
        //         _id:"$favoriteFruit",
        //          count:{
        //             $sum:1
        //          }
        //        },

        //     },
        //     {
        //         $sort:{
        //             count:-1
        //         }
        //     },
        //     {
        //         $limit:2
        //     }
        // ])

//         //! find the total no of male and female
        // const users = await User.aggregate([
        //     {
        //         $group:{
        //             _id:"$gender",
        //             genderCount:{
        //                 $sum:1
        //             },
        //         }
        //     }
        // ])

//         //! which country has the highest number of registered users
        // const users = await User.aggregate([
        //      {
        //         $group:{
        //             _id:"$company.location.country",
        //             userCount:{
        //                 $sum:1
        //             }
        //         }
        //      },
        //      {
        //         $sort:{
        //             userCount: -1
        //         }
        //      },
        //      {
        //         $limit:1
        //      }
        // ])


//         //! list all the unique eye color present in collection with user name
//         const users = await User.aggregate([
//              {
//                 $group:{
//                     _id:"$eyeColor",
//                     username: { $addToSet: "$name" }
//                 }
//              },


//         ])

//         return res.json({length:users.length,users})
//     } catch (error) {
//             console.log('error',error)
//     }
// })


//! videos 4

// router.get("/", async (req, res) => {
//     try {


//         //!  What is the averge number of tags per users?

//         //! method 1
        // const users = await User.aggregate([
        //      {
        //         $unwind:"$tags"
        //     },
        //     {
        //         $group:{
        //             _id:"$_id",
        //             numberOfTags:{
        //                 $sum:1
        //             }
        //         }
        //     },

        //     {
        //         $group:{
        //             _id:null,
        //             averageNumberofTags:{
        //                 $avg:"$numberOfTags"
        //             }
        //         }
        //     }

        // ])

//         //! method 2
//         const users = await User.aggregate([
//             {
//                 $addFields:{
//                     numberOfTags:{
//                         $size:{$ifNull : ["$tags",[]]}
//                     }
//                 }
//             },

//             {
//                 $group:{
//                     _id:null,
//                     averageofTags:{
//                         $avg:"$numberOfTags"
//                     }
//                 }
//             }

//         ])

//         return res.json({ length: users.length, users: users })


//     } catch (error) {
//         console.log('error', error)
//     }
// })




//! videos 5
//! Match and project pipeline

// router.get("/", async (req, res) => {
//     try {

//         //! 1. How many users have 'enim' as one of their tags
//         const users = await User.aggregate([
//              {
//                 $match:{
//                     tags:"enim"
//                 }
//              },
//              {
//                 $count:"userWithtagsEnim"
//              }
//         ])

//         //! 2. What are the names and age of user who are inactive and have 'velit' as their tag?

//         const users = await User.aggregate([
//              {
//                 $match:{
//                     isActive:false,
//                     tags:'velit'
//                 }
//              },

//              {
//                 $project:{
//                     name:1,
//                     age:1
//                 }
//              }
             
//         ])


//         //! 3. How many users have a phone number wtarting with '+1 (940)'?

//         const users = await User.aggregate([
//              {
//                 $match:{
//                     "company.phone": /^\+1 \(940\)/
//                 }
//              },

//              {
//                 $count:"userWithspecialPhone"
//              }
             
//         ])


//         return res.json({ length: users.length, users: users })


//     } catch (error) {
//         console.log('error', error)
//     }
// })


module.exports = router