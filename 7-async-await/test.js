cost handleSubmit = (event) => {
    event.preventDefault();

    const type = document.getElementById('<ID OF THE DROPDOWN>').value;

    fetch('/jokes', {
        method: 'POST',
        haders: {
            'accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: { type: type }
    })
        .then(JSON.parse(data))
        .then(data => {
            //check the status. 
            // if it's '200'
            // render the joke. 
            // find the div that you created before this, bring in the HTML 
        })

    // on the server: res.status(200).send({status: 200, data: ...})
}
// this is for the FRONT END PART