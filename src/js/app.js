const btns = document.querySelectorAll('.share-button')
const modal = document.querySelector('.modal');

btns.forEach(button => button.addEventListener(
    'click',
    (e) => {
        modal.classList.toggle('visible');
    }));
