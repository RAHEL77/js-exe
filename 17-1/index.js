    const div = document.querySelector("#hello")
    const plus = document.querySelector(".plus")
    const minus = document.querySelector(".minus")


    minus.addEventListener("click", () => {
        let fontSize = parseInt(window.getComputedStyle(div).fontSize);
        fontSize -= 10;
        if (fontSize > 6) {
            div.style.fontSize = `${fontSize}px`
        }
    })

    plus.addEventListener("click", () => {
        let fontSize = parseInt(window.getComputedStyle(div).fontSize);
        fontSize += 10;
        if (fontSize < 100) {
            div.style.fontSize = `${fontSize}px`
        }
    })


    // const div = document.querySelector("p");
    // const plus = document.querySelector(".plus");
    // const minus = document.querySelector(".minus");
    // let n = 0;
    // plus.addEventListener("click", () => {
    //     let fontSize = parseInt(window.getComputedStyle(div).fontSize);
    //     fontSize += 10;
    //     if (fontSize < 100) {
    //         div.style.fontSize = `${fontSize}px`;
    //     }
    // });

    // minus.addEventListener("click", () => {
    //     let fontSize = parseInt(window.getComputedStyle(div).fontSize);
    //     fontSize -= 10;
    //     if (fontSize > 6) {
    //         div.style.fontSize = `${fontSize}px`;
    //     }
    // });
    // div.addEventListener("click", () => {
    //     div.style.backgroundColor = `hsl(${(n = n + 15)} , 100% , 50%)`;
    // });