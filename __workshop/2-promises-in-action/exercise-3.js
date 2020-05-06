const request = require('request-promise');

const getDadJoke = async () => {
    const response = await request({ uri: 'https://icanhazdadjoke.com/', headers: { "Accept": "application/json" } });
    const parsedResponse = JSON.parse(response);
    if (parsedResponse.status === 200) {
        return parsedResponse.joke;
    }
}

//getDadJoke();
module.exports = { getDadJoke };