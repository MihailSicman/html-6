function showFact(joke) {
    document.querySelector("#fact").innerText = joke
}
axios.get("http://api.icndb.com/jokes/random/%3Cnumber%3E")
    .then(response => showFact(response.data.value.joke))

    