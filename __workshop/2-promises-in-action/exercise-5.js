const request = require('request-promise');

const getGeekJoke = async () => {
    const fuckOff = await request('https://geek-jokes.sameerkumar.website/api');
    return (fuckOff);
}

module.exports = { getGeekJoke };