document.addEventListener('DOMContentLoaded', function(){
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.header-nav')
    const sticks = document.querySelectorAll('.burger-stick')
    burger.addEventListener('click', function(){
        nav.classList.toggle('nav-tablet')
        const navTablet = document.querySelector('.nav-tablet')
        for(let i = 0; i<sticks.length; i++){
            sticks[i].classList.toggle('js-burger-stick' + i)
        }
        if(navTablet === null){
            nav.style.display = 'none'
        }else{
            nav.style.display = 'block'
        }
    })
})