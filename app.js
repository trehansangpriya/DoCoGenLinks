const social = document.querySelector('.social')
const comm = document.querySelector('.comm')
const blurSocial = document.querySelector('.blur-social')
const blurComm = document.querySelector('.blur-comm')
const input = document.querySelector('.search');

social.addEventListener('click', () => {
    blurSocial.classList.toggle('index')
    social.style.zIndex = '4'
    comm.style.zIndex = '1'
})

comm.addEventListener('click', () => {
    blurComm.classList.toggle('index')
    social.style.zIndex = '1'
    comm.style.zIndex = '5'
})

input.addEventListener('keyup', () => {
    console.log('check')
    filter = input.value.toUpperCase();
    ul = document.querySelector('ul');
    li = document.querySelectorAll('li')
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelectorAll('a')[0];
        txtValue = a.textContent || a.innerText || a.innerHTML;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})