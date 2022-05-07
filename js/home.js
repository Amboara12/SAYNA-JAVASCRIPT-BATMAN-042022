const mask = document.getElementById('mask-batman')
console.log(mask);

let i = 0

const lesImages = [
    "illustrations/Home/Batslider0.png",
"illustrations/Home/Batslider1.png",
"illustrations/Home/Batslider2.png",
"illustrations/Home/Batslider3.png",
"illustrations/Home/Batslider4.png",
"illustrations/Home/Batslider5.png",
"illustrations/Home/Batslider6.png",
"illustrations/Home/Batslider7.png",
"illustrations/Home/Batslider8.png",
"illustrations/Home/Batslider9.png",
]

setInterval(plus, 3000)
function plus() {
    mask.src = lesImages[i]
    i = i + 1 
    if (i >= lesImages.length) {
        i = 0
    }
}
const batman = document.getElementsByClassName('batman-1')
// loi=Array.from()
const IMAGE = document.getElementsByClassName('IMAGE')

for (let i = 0; i < batman.length; i++) {
    batman[i].addEventListener('mouseover', () => {
        IMAGE[i].style.display =  'flex'
    })
    batman[i].addEventListener('mouseout', () => {
        IMAGE[i].style.display =  'none'
    })
    
}



//

// pour les scroll 

function izayMiseho(element) {
    const Ambony = element.getBoundingClientRect().top;
    return Ambony <= window.innerHeight
};


function ManampyClass(element, Class) {
    element.classList.add(Class)
}

function manalaClass(element, Class) {
    element.classList.remove(Class)
}

function MampisehoScroll(listeBalise, ClassNom) {
    listeBalise.forEach(element => {
        if (izayMiseho(element)) {
            ManampyClass(element, ClassNom)
        } else {
            manalaClass(element, ClassNom)
        }
    });
}


const h1 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');
const btn = document.querySelectorAll('button');
const input = document.querySelectorAll('input')
const image = document.querySelectorAll('img');


window.addEventListener('scroll', () => {
    MampisehoScroll(h1, 'Animation')
    MampisehoScroll(p, 'Animation')
    MampisehoScroll(btn, 'Animation')
    MampisehoScroll(input, 'Animation')
    MampisehoScroll(image, 'Animation')

})