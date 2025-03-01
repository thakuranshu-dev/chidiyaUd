// handle preloading
const preLoader = document.querySelector('#pre-loader');
window.addEventListener('load', function(){
    setTimeout(() => {
        preLoader.style.display = 'none';
    }, 2000);
})

// declaring items
const landAnimals = ['🙉','🐱','🐶','🐵','🦁','🐯','🦊','🦒','🐺','🐷','🦝','🐮','🐭','🐹','🐰','🐻','🐴','🦓','🐸','🐼','🐨','🐒','🦍','🦧','🦮','🦛','🦏','🦌','🐎','🐆','🐈','🐕','🐂','🐃','🐄','🐖','🐏','🐑','🐐','🐪','🐁','🐘','🦡','🦨','🦥','🦘','🦙','🐫','🐀','🦔','🐇'];

const waterAnimals = ['🦎','🐊','🐢','🐍','🦦','🦈','🐬','🐳','🐋','🐟','🐠','🐡','🦐','🦑','🐙','🦞','🦀','🐛','🐌','🦂','🕷','🐧'];

const birds = ['🦅','🦃','🐓','🦆','🦩','🦚','🦉','🐦','🐥','🐤','🐣','🦟','🦜','🦋','🐞','🦇','🦗','🦢','🐝','🐔'];

const stationaries = ['🚗','🚂','🚤','🚢','🛒','🎪','⚽','🎷','🎺','🔓','🔐','🔑','🔧','🛢','⛏','🛠','🎸','🪕','🎤','🎙','🪓','🎧','📯','🎻','🗡','🔪','📞','☎','🧲','⚖','📱','🎥','📷','🔍','🕯','🪔','💡','🔦','📔','📚','🖋','🖍','🖌','📌','🗑','✂','📐','📏','💼','⏳','⌚','⏰','🛺','🚙','🚲','🛵','🏍','🚒','🚑','🚚','🚕'];

const foodItems = ['🍏','🥥','🍇','🥄','🍎','🌽','🥕','🍐'];

const flying = ['🛬','🛫','🚀','🚁','🛩','🪂','✈','🛰','🛩']

const allElements = [landAnimals, waterAnimals, birds, stationaries, foodItems, flying];
var randomArrayIndex = 0;
var randomArray;
var randomElementIndex = 0; 
var randomElement;
const item = document.getElementById('items');
const point = document.getElementById('points');
const gains = document.getElementById('gain');
var totalPoints = 0;

function randomItem(){
    //Select a random array from the allElements array
    randomArrayIndex = Math.floor(Math.random() * allElements.length);
    randomArray = allElements[randomArrayIndex];

    //Select a random element from the chosen array
    randomElementIndex = Math.floor(Math.random() * randomArray.length);
    randomElement = randomArray[randomElementIndex];

    item.textContent = randomElement;

    console.log(randomArrayIndex, randomElementIndex)

    if (totalPoints < 0) {
        totalPoints = 0;
    }
    point.textContent = "Score: "+totalPoints;

}

document.addEventListener('DOMContentLoaded', function() {
    // execute just after the DOM is loded in the browser
    randomItem();
    console.log('DOM fully loaded and parsed');
});

function gainPoints(pt) 
{
    if(pt == "-5") {
        pt = pt + " 😑" ;
        gains.style.color = 'red';
    } else {
        pt = pt + " 😉" ;
        gains.style.color = 'white';
    }
    //Set the text content to gained points
    gains.textContent = (pt);
    
    //Add the 'show' class to trigger the animation
    gains.classList.add('show');
    
    //Remove the 'show' class after the animation ends so it can be triggered again
    gains.addEventListener('animationend', function() {
        gains.classList.remove('show');
    }, { once: true }); // 'once: true' ensures the event listener is removed after it runs
}

//nwng
function animateItem() {
    item.classList.add('items');
}

function change() {
    animateItem();

    if (birds.includes(randomElement) || flying.includes(randomElement) ) {
        totalPoints += 20;
        gainPoints("+20");
    } 
    else if (randomElement == "") {
        totalPoints += 0;
    }
    else {
        totalPoints -= 5;
        gainPoints("-5"); 
    }
    
    point.textContent = "Points: "+totalPoints;
    randomItem();
}

function changes() {
    animateItem();
    // randomItem()

    if (birds.includes(randomElement) || flying.includes(randomElement)) {
        totalPoints -= 5;
        gainPoints("-5");
    } else {
        totalPoints += 10;
        gainPoints("+10");
    }
    point.textContent = "Points: "+totalPoints;
    randomElement = "";
    change();
}

/*  JQuery to execute the code after DOM is loded in the Browser...
$(document).ready(function() {
    // Your code here
    console.log('DOM fully loaded and parsed');
});
*/

// Get the button and overlay elements
const fadeBtn = document.getElementById('toFade');
const overlay = document.querySelector('.overlay');
const playBtn = document.getElementById('play');
const restartBtn = document.getElementById('restart');
const quiteBtn = document.getElementById('quite');
const scores = document.querySelector('.score');


// Add click event to the button
fadeBtn.addEventListener('click', function() {
    // Toggle the display of the overlay (show or hide)
    if (overlay.style.display === 'none' || overlay.style.display === '') {
        overlay.style.display = 'block'; // Show the overlay
        document.querySelector('.secondary').style.display ='flex';
        scores.textContent = "Score:" + totalPoints;
    } else {
        overlay.style.display = 'none'; // Hide the overlay
    }
});

playBtn.addEventListener('click', function() {
    document.querySelector('.secondary').style.display ='none';
    overlay.style.display = 'none';
});

restartBtn.addEventListener('click', function(){
    // Redirect to the index page
   location.reload();
});

quiteBtn.addEventListener('click', function(){
    // Redirect to the index page
    window.location.href = '/index.html';
});


