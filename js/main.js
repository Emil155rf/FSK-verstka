const popup = document.getElementById('popup')
const closeBtn = document.getElementById('closeBtn')
const login = document.getElementById('login')
const close_btn = document.getElementById('close_Btn')
const open = document.getElementById('header__login')
const overlay = document.getElementById('overlay')
const fbBtn = document.getElementById('fb__btn')
const circle = document.getElementById('circle')





function showPopup() {
    popup.style.display = 'block'
    closeBtn.style.display = 'block'
}

function closePopup() {
    popup.style.display = 'none'
    closeBtn.style.display = 'none'
}

window.onload = showPopup

closeBtn.onclick = closePopup






function showLogin() {
    login.style.display = 'block'
    close_btn.style.display = 'block'
    overlay.style.display = 'block'
}


function closeLogin() {
    login.style.display = 'none'
    close_btn.style.display = 'none'
    overlay.style.display = 'none'
}

open.onclick = showLogin

close_btn.onclick = closeLogin










let slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}




let slider_2 = document.getElementById("myRange-2");
let output_2 = document.getElementById("value-2");
output_2.innerHTML = slider_2.value;

slider_2.oninput = function () {
    output_2.innerHTML = this.value;
}

let slider_3 = document.getElementById("myRange-3");
let output_3 = document.getElementById("value-3");
output_3.innerHTML = slider_3.value;

slider_3.oninput = function () {
    output_3.innerHTML = this.value;
}



let slider_4 = document.getElementById("myRange-4");
let output_4 = document.getElementById("value-4");
output_4.innerHTML = slider_4.value;

slider_4.oninput = function () {
    output_4.innerHTML = this.value;
}

let slider_5 = document.getElementById("myRange-5");
let output_5 = document.getElementById("value-5");
output_5.innerHTML = slider_5.value;

slider_5.oninput = function () {
    output_5.innerHTML = this.value;
}


const buttons = document.querySelectorAll('.collapsible-button');


buttons.forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling

        if (content.style.display === 'flex') {
            content.style.display = 'none'
        } else {
            content.style.display = 'flex'
        }
    })
})





