import Twitter from 'twitter';

import * as env from './config/env';

const {
    consumerKey,
    consumerSecret,
    accessTokenKey,
    accessTokenSecret
} = env.default;

const client = new Twitter({
    consumer_key: consumerKey,
    consumer_secret: consumerSecret,
    access_token_key: accessTokenKey,
    access_token_secret: accessTokenSecret
});

client.stream('statuses/filter',
    {
        track: 'Trump'
    },
    (stream) => {
        stream.on('data', (tweet) => {
            if (tweet.user && tweet.user.name.includes('🇬🇧')) {
                console.log(`Get ${tweet.user.name} (https://twitter.com/${tweet.user.screen_name}) in the bin.`);
                console.log(`The tweet - ${tweet.text}`);
            }
        });
    });
