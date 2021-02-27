const div = document.createElement('div')
div.classList.add('wrapper')
document.body.appendChild(div)

//make unordered list
const ul = `<ul> 
<li>one</li>
<li>two</li>
<li>three</li>
 </ul>`
    //put ul to div
div.innerHTML = ul;
console.log(div);

//create image
const img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.height = 250;
img.classList.add('cute')
img.alt = 'cute';
div.appendChild(img);
//make a div with html 
const myHTML = `
<div class="myDiv">   
<p>parag1</p>
<p>parag2</p>
</div>`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', myHTML);
//add a class to p2 called warning
const myDiv = div.querySelector('.myDiv')
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();

function generatePlayerCards(name, age, height) {
    const html = `
    <div class="playCard">
    <h2>${name}-${age}</h2>
    <p>Their heiht is ${height} and ${age}years old.in dog years this person would be ${age*7}</p>
    <button class="delete" type="button">&times;Delete</button>
    </div>`;
    return html;
}

//make a new div with class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
//have that func make 4 cards
let cardsHTML = generatePlayerCards('wes', 12, 150)
cardsHTML = cardsHTML + generatePlayerCards('scott', 12, 150)
cardsHTML = cardsHTML + generatePlayerCards('caty', 12, 150)
cardsHTML = cardsHTML + generatePlayerCards('kayt', 12, 150)
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
const buttons = document.querySelectorAll('.delete');

function deleteCard(event) {
    const buttonclicked = event.currentTarget;
    buttonclicked.parentElement.remove();
}
buttons.forEach(button => button.addEventListener(
    'click', deleteCard));