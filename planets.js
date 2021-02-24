function Check() {
    // luam paragraful cu id-ul replanet intr-o variabila
    var planet = document.querySelector("#redplanet")

    planet.innerText = "Aliens landed here on Mars"
    planet.classList.add("alert", "alert-danger")
    // planet.remove()
}

var button = document.querySelector("input[type='button']")
button.addEventListener("click",Check)
