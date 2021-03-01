document.querySelector("button").addEventListener("click", () => {
    let text1;
    if (parseInt(document.querySelector("#text").value) >= 18) {
        text1 = "you can drink";
    } else
        text1 = "too young to drink";
    document.querySelector("#permission").innerHTML = text1;
});