const express = require('express');
const routerBlogPosts = require('./routes/blogPostsRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(routerBlogPosts);
app.use(errorMiddleware);



module.exports = app;