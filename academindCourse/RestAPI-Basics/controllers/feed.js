exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: 
        [{
            title: 'First Post',
            content: 'This the first post!'
        }]
    });
};

exports.postPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //Create post in db
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toDateString(),
            title: title,
            content: content
        }
    })
};