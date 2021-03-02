setInterval(() => {
    var date = new Date();
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.getElementById("time").innerHTML = time;
}, 1000)