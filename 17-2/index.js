let text = "";

function myText() {
    if (document.getElementById("ta").value.length > 10)
        document.getElementById("ta").value = text
    else
        text = document.getElementById("ta").value;
}