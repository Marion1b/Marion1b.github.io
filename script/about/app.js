function appear(element, invisibleElement1, invisibleElement2){
    element.style.display='flex'
    invisibleElement1.style.display = 'none'
    invisibleElement2.style.display = 'none'
}
function active (activeElement, unactiveElement1, unactiveElement2){
    activeElement.className = 'about-active'
    unactiveElement1.className='about-unactive'
    unactiveElement2.className = 'about-unactive'
}

const parcours = document.querySelector('#li-parcours')
const parcoursContent = document.querySelector('.about-parcours')
const competences = document.querySelector('#li-competences')
const competencesContent = document.querySelector('.about-competences')
const cv = document.querySelector('#li-cv')
const cvContent = document.querySelector('.about-cv')

document.addEventListener('DOMContentLoaded', function(){
    parcours.addEventListener('click',function(){
        appear(parcoursContent, competencesContent, cvContent)
        active(parcours, competences, cv)
    })
    competences.addEventListener('click', function(){
        appear(competencesContent, parcoursContent, cvContent)
        active(competences, parcours, cv)
    })
    cv.addEventListener('click', function(){
        appear(cvContent, competencesContent, parcoursContent)
        active(cv, competences, parcours)
    })
})