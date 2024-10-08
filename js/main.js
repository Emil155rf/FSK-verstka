const popup = document.getElementById('popup')
const closeBtn = document.getElementById('closeBtn')
const login = document.getElementById('login')
const close_btn = document.getElementById('close_Btn')
const open = document.getElementById('header__login')
const overlay = document.getElementById('overlay')

const mapOpen = document.querySelector('.btn__1')
const map = document.querySelector('.card-map')
const cards = document.querySelector('.cards')
const moreBtn = document.querySelector('.card__btn-3')
const backBtn = document.querySelector('.btn__3')

const buttons = document.querySelectorAll('.collapsible-button')

const filter = document.querySelector('.filter')
const openFilter = document.querySelector('.btn__2')
const closeFilter = document.querySelector('.filter-close_Btn')

const credit = document.querySelector('.cred')
const scrollTo = document.querySelector('.forbes__h1')







function showFilter() {
    openFilter.addEventListener('click', () => {
        filter.style.display = 'block'
        closeFilter.style.display = 'block'


    })
    closeFilter.addEventListener('click', () => {

        filter.style.display = 'none'
        closeFilter.style.display = 'none'

    })

}

showFilter()










window.onload = function () {
    popup.style.display = 'block'
    closeBtn.style.display = 'block'

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'
        closeBtn.style.display = 'none'
    })
}








function showLogin() {
    open.addEventListener('click', () => {
        login.style.display = 'block'
        close_btn.style.display = 'block'
        overlay.style.display = 'block'

    })


    close_btn.addEventListener('click', () => {
        login.style.display = 'none'
        close_btn.style.display = 'none'
        overlay.style.display = 'none'

    })

}

showLogin()










let slider = document.getElementById("myRange")
let output = document.getElementById("value")
output.innerHTML = slider.value

slider.oninput = function () {
    output.innerHTML = this.value
}




let slider_2 = document.getElementById("myRange-2")
let output_2 = document.getElementById("value-2")
output_2.innerHTML = slider_2.value

slider_2.oninput = function () {
    output_2.innerHTML = this.value
}

let slider_3 = document.getElementById("myRange-3")
let output_3 = document.getElementById("value-3")
output_3.innerHTML = slider_3.value

slider_3.oninput = function () {
    output_3.innerHTML = this.value
}



let slider_4 = document.getElementById("myRange-4")
let output_4 = document.getElementById("value-4")
output_4.innerHTML = slider_4.value

slider_4.oninput = function () {
    output_4.innerHTML = this.value
}

let slider_5 = document.getElementById("myRange-5")
let output_5 = document.getElementById("value-5")
output_5.innerHTML = slider_5.value

slider_5.oninput = function () {
    output_5.innerHTML = this.value
}





let slider_6 = document.getElementById("myRange-6")
let output_6 = document.getElementById("value-6")
output_6.innerHTML = slider_6.value

slider_6.oninput = function () {
    output_6.innerHTML = this.value
}



let slider_7 = document.getElementById("myRange-7")
let output_7 = document.getElementById("value-7")
output_7.innerHTML = slider_7.value

slider_7.oninput = function () {
    output_7.innerHTML = this.value
}




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





function showMap() {
    mapOpen.addEventListener('click', () => {
        map.style.display = 'block'
        cards.style.display = 'none'
        moreBtn.style.display = 'none'
        backBtn.style.display = 'block'

    })



}

showMap()


function hideMap() {
    backBtn.addEventListener('click', () => {
        map.style.display = 'none'
        cards.style.display = 'grid'
        moreBtn.style.display = 'block'
        backBtn.style.display = 'none'

    })

}

hideMap()




let prevScrollpos = window.pageYOffset
window.onscroll = function scrollMain() {
    let currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos || currentScrollPos < 300) {
        document.querySelector('.header').style.top = "0"
    } else {
        document.querySelector('.header').style.top = "-70px"
    }
    prevScrollpos = currentScrollPos

}











function scrollToCredit() {
    credit.addEventListener('click', () => {
        scrollTo.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    })
}

scrollToCredit()