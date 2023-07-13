let navbutton = document.querySelector('.nav-icon');
let container=document.querySelector('.option-container');
let buttons=document.querySelectorAll('.list2');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        container.classList.remove('active');
    })
})




navbutton.addEventListener('click', (e) => {
    container.classList.toggle('active');



})

