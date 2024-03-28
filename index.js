const express = require('express')
const app = express()
const port = 3000
const connect = require("./db/index")




app.use("/users",require("./routers/users"))
app.use("/authors",require("./routers/authors"))
app.use("/books",require("./routers/books"))




app.listen(port, async() => {
    await connect()
   console.log(`Example app listening on port ${port}`)
})