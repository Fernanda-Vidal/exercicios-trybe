const fs = require('fs/promises');

const filename = 'src/trybitter.json';

const readBlogPostFile = async () => {
	try {
		const arrayPosts = await fs.readFile(filename, 'utf8');

		return JSON.parse(arrayPosts);
	} catch (error) {
		return null;
	}
};

const getBlogPostLastId = async () => {
	const arrayPosts = await readBlogPostFile();
	return arrayPosts.nextPostId;
};

const insertBlogPostFile = async (post) => {
	try {
		const arrayPosts = await readBlogPostFile();
        post = {
            id: arrayPosts.nextPostId,
            ...post
        }
		arrayPosts.posts.push(post);
		arrayPosts.nextPostId += 1;

		const content = await fs.writeFile(filename, JSON.stringify(arrayPosts));
		return content;
	} catch (error) {
		return null;
	}
};

const changeBlogPostFile = async (post, id) => {
	try {
		const arrayPosts = await readBlogPostFile();
		let changedPost;

		for (let i = 0; i < arrayPosts.posts.length; i += 1) {
			if (arrayPosts.posts[i].id === Number(id)) {
				arrayPosts.posts[i].title = post.title;
                arrayPosts.posts[i].author = post.author;
				arrayPosts.posts[i].description = post.description;
				arrayPosts.posts[i].updatedAt = post.updatedAt;
				changedPost = arrayPosts.posts[i];
			}
		}

		await fs.writeFile(filename, JSON.stringify(arrayPosts));
		return changedPost;
	} catch (error) {
		return null;
	}
};

const getBlogPostFile = async () => {
	const arrayPosts = await readBlogPostFile();
	return arrayPosts.posts;
}

module.exports = {
	readBlogPostFile,
	insertBlogPostFile,
	getBlogPostLastId,
	changeBlogPostFile,
	getBlogPostFile
};