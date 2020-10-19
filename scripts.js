'use strict'
const words = document.querySelector('.words')
window.addEventListener('keydown', e=>{
    let letter = e.key
    let reg = letter.match(/п|р|о|в|е|к|а/gi)
    let txt = document.createElement("p")
    txt.innerHTML = reg;
    words.insertAdjacentElement('beforeend', txt)
})
