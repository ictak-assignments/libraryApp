const express = require('express');
const authorRouter = express.Router();

function router1(nav){

    var authors = [
        {
        author:'Carlo Collodi'
        ,
        authorOf:'most famous book : pinachio'
        ,
        genre:'novelist'
        ,
        img:'carlo.jpg'
    
        },
        {
        author:'Mark Twain'
        ,
        authorOf:'most famous book : tomsawyer'
        ,
        genre:'novelist'
        ,
        img:'mark.jpg'
        }
        ,
        {
        author:'Vaikom Muhammed Basheer'
        ,
        authorOf:'most famous book : barghavee nilayam'
        ,
        genre:'novelist',
        img:'basheer.jpg'
        }
        ]
    
    authorRouter.get('/',(req,res) => {
        res.render('authors.ejs',
            {
             nav:[
                 {link:'/books',name:'books'},
                 {link:'/authors',name:'authors'}
                ],
                title:'library',
                authors
            })
    });

    authorRouter.post('/', (req, res) => {
        const { author, authorOf ,genre ,img } = req.body;
        authors.push({ author, authorOf, genre,img })
        res.redirect('/authors');
    })
    
    authorRouter.get('/:id',(req,res) => {
        const id = req.params.id;
        res.render('authorDetails.ejs',
            {
             nav:[
                 {link:'/books',name:'books'},
                 {link:'/authors',name:'authors'}
                ],
                title:'library',
                authorDetails:authors[id]
            })
    });
    return authorRouter;

}




module.exports=router1;