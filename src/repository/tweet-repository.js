const Tweet = require('../models/tweet');
class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }

    async getWithComments(id) {
        try {
            //generally it returns mongoose object, adding lean() will give JS object
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }

    async update(tweetid, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetid, data, { new: true });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy() {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;