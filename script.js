const menuBtn = document.querySelector('#menu-toggle')
const menu = document.querySelector('.menu-burger')

menuBtn.addEventListener('change', ()=>{
    const header = document.querySelector('nav')
    if(!menuBtn.checked){
        menu.style.transform = 'translateX(-5000px)'
        header.style.backgroundColor = ''
        return
    }
    menu.style.transform = 'translateX(0px)'
    header.style.backgroundColor = 'white'

})