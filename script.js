// still has to be done
// 1- conatct info
// 2- upload resume

const mode = document.querySelector('.mode')
mode.addEventListener('click', function(){
    document.body.classList.toggle('theme')
    if (document.body.classList.contains('theme')){
        mode.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    }else{
        mode.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    }
})