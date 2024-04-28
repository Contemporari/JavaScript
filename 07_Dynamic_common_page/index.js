const express = require ('express')
const app = express()

app.set('view engine', 'ejs')

let user = {
    name :"yusuf",
    email:"yusuf@test.com",
    profile:"software engg",
    skills: ['Python',"Java",'Java Script','C++','NodeJs']
} 
app.get('',(req,resp)=>{
    resp.render('profile',{user})
})
app.get('/login',(req,resp)=>{
    resp.render('login',{user})
})
app.listen(4000)