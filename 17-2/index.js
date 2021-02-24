const msg = document.querySelector("#msg1")
const el = document.querySelector("Submit")
el.addEventListener("click", () => {
    if (msg.length <= 10) {
        document.getElementById("alert").innerHTML = "enter at least 100 letter";
    }
})