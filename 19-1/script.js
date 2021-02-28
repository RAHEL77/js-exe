const title2 = document.querySelector(".start-here")
    // 1. Change the text from “title 2” to “main title”
title2.innerHTML = "main title";
title2.textContent = "main title";

// 2. Add another sub title with the text “sub title 4”
const nextTitle = title2.nextElementSibling;
const thisUl = nextTitle.firstElementChild;
let title4 = document.createElement('li')
let title4Text = document.createTextNode('sub title 4')
title4.appendChild(title4Text)
thisUl.appendChild(title4)

// 3. Delete the last <li> element from the list
const nextLi = title2.parentElement
nextTitle.lastElementChild.remove()

// 4. Change the <title> element text to “Master Of The Dom”
document.title = "master Of The Dom"

// 5. Change the text of the <p> element to something else
const some = title2.parentElement.nextElementSibling;
const p = some.firstElementChild;
p.textContent = "somethingelseSs"