const express = require('express');
// const booksRouter = express.Router();
const app = express();
const port = process.env.PORT || 5000;
const nav = [
                {link:'/books',name:'books'},
                {link:'/authors',name:'authors'}
            ]


const booksRouter= require(__dirname+'/src/routes/bookRoutes')(nav)
const authorRouter= require(__dirname+'/src/routes/authorRoutes')(nav)

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())


app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views')
app.use('/books',booksRouter);
app.use('/authors',authorRouter);

app.get('/',(req,res) => {
    res.render('index.ejs',{
        nav,
        title:'library'
    }
        )
});

app.get('/signup',(req,res) => {
    res.render('signup.ejs')
});
app.get('/login' , (req,res) =>{
	res.render('login.ejs')
});
app.get('/newbook' ,(req,res) => {
    res.render('newbook.ejs')
})
app.get('/newauthor' ,(req,res) => {
    res.render('newauthor.ejs')
})












app.listen(port,()=>{
    console.log("port ready at " + port); 
})