const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log("Server started");
    await connect();
    console.log('Mongodb connected');
    // const tweet = await Tweet.create({
    //     content: 'third tweet',
    //     userEmail: 'a@b.com'
    // });
    // console.log(tweet);

    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //     content: 'Tweet with comment schema'
    // });
    // const comment = await Comment.create({ content: 'New comment' });
    // console.log(tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweet = await tweetRepo.getAll(2, 4);

    console.log(tweet);
    console.log(tweet[0].contentWithEmail);
});

