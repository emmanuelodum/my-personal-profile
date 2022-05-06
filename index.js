// read more about, code to display read more.
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "show less";
    } else {
        readMoreBtn.textContent = "show more";
    }
})


// show/hide skills item
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click',() => {
        skill.querySelector('.items').classList.toggle('show-items')
    })
})

// box-shadow on scroll down
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})