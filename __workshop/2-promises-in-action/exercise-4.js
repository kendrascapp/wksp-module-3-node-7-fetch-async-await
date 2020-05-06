const request = require('request-promise');

const getTronaldDump = async () => {
    const response = await request({ uri: 'https://api.tronalddump.io/random/quote', headers: { "Accept": "application/json" } });
    const parsedResponse = JSON.parse(response);
    return (parsedResponse.value);
}

module.exports = { getTronaldDump };