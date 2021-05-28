const express = require('express');
const booksRouter = express.Router();

function router(nav){

    var books = [
        {
        title:'tom and jerry'
        ,
        author:'joseph barbera'
        ,
        genre:'cartoon'
        ,
        img:'tom.jpg'
    
        },
        {
        title:'harry potter'
        ,
        author:'j.k'
        ,
        genre:'fantasy'
        ,
        img:'harry.jpg'
        }
        ,
        {
        title:'tomsawyer'
        ,
        author:'mark twain'
        ,
        genre:'classic',
        img:'tomsawyer.jpg'
        }
        ]
    
    booksRouter.get('/',(req,res) => {
        res.render('books.ejs',
            {
             nav ,
                title:'library',
                books
            })
    });
    
    booksRouter.get('/:id',(req,res) => {
        const id = req.params.id;
        res.render('book1.ejs',
            {
             nav ,
                title:'library',
                book1:books[id]
            })
    });


    

    booksRouter.post('/', (req, res) => {
        const { title, author ,genre ,img } = req.body;
        books.push({ title, author, genre,img })
        res.redirect('/books');
    })







    return booksRouter;

}




module.exports=router;