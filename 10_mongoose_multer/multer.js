const multer = require('multer')
const express  = require('express')
const app = express()


let storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"upload/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + '-' +"new" +".jpg")
    }
})
let upload = multer({storage: storage}).single('filep')





app.post('/upload',upload,(req,resp)=>{
    resp.send('file uploaded succefully !')
})


app.listen(4000)

