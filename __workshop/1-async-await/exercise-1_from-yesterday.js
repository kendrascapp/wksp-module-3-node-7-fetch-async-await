// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    const response = await request('http://api.open-notify.org/iss-now.json')
    const responseObject = JSON.parse(response);
    const issPosition = responseObject.iss_position;
    const payload = { lat: issPosition.latitude, lng: issPosition.longitude };
    console.log(payload);
    return payload;
}

getIssPosition();