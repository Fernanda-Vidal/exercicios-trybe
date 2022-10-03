const express = require('express');
const fieldValidation = require('../middlewares/fieldValidation');
const valuesValidation = require('../middlewares/valuesValidation');
const { getBlogPostFile, insertBlogPostFile, changeBlogPostFile } = require('../utils/readAndWriteFiles');

const routerBlogPosts = express.Router();

routerBlogPosts.get('/blog-posts', async (req,res) => {
    const posts = await getBlogPostFile();

    return res.status(200).json(posts);
});

routerBlogPosts.post('/blog-posts', fieldValidation, valuesValidation, async (req, res) => {
    // request -> title (5), description(20), author(2)
    // response -> 201 - created -> json -> title, description, author

    const blogPost = req.body;

    const inserted = await insertBlogPostFile(blogPost);
    console.log(inserted);

    return res.status(201).json(blogPost)
});

routerBlogPosts.put('/blog-posts/:id', fieldValidation, valuesValidation, async (req, res) => {
    let blogPost = req.body;

    const { id } = req.params;
    blogPost = {
        ...blogPost,
        updatedAt: new Date(),
    };

    const changedPost = await changeBlogPostFile(blogPost, id);
    return res.status(200).json(changedPost);
})

module.exports = routerBlogPosts;
