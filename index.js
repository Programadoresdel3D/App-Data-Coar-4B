const express = require('express')

// import {fileURLToPath} from 'url'

// const __dirname = dirname(fileURLToPath(import.meta.url))
const path = require("path");


const app = express()

app.use(express.static(path.join(__dirname, "public")));
app.get('/', (req, res) =>{
    res.sendFile("./public/index.html", {
        root: __dirname
    })
})
app.get('/:id', (req, res)=>{
    res.sendFile("./public/student.html", {
        root: __dirname
    })
})

const port = 3000
app.listen(port)
console.log(`Server on port ${port}`)
