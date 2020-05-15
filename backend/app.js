const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
    const posts = [
        {
        id: 'fadf12421l',
        title : 'first server-side post',
        content : 'this is comming from the server'
    },
    {
        id: 'ksaf12421l',
        title : 'second server-side post',
        content : 'this is comming from the server!'
    },
    ]
    
    res.status(200).json({
        message: 'posts fetched successfully',
        posts: posts
    });
})

module.exports = app;