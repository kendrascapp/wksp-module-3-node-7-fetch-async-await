// nothing here yet...

const printedJoke = document.getElementById("printedJoke");

const getJoke = (event) => {
    event.preventDefault();
    const type = document.getElementById("type").value;
    fetch(`/gimme-joke/${type}`)
        .then(res => res.json())
        .then(data => {
            printedJoke.innerHTML = data.joke;
            console.log(data)
        })
}