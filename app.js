let leftBtn = document.querySelector(".left_btn")
let links = document.querySelector('.left_content')
let right_content = document.querySelector('.right_content')
let basic_li = document.querySelectorAll('.basic_li')
basic_li.forEach(elem =>{
    elem.addEventListener('click', ()=>{
        if (elem.nextElementSibling!=null) {
            elem.nextElementSibling.classList.toggle('drop_ul_active')
        }
    })
})
leftBtn.addEventListener('click', (e) => {
    links.classList.toggle("left_active")
    right_content.classList.toggle('right_active')
})