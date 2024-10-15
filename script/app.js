const text = document.getElementById('text');
const password = document.getElementById('password');
const button = document.querySelector('.btn');


let a = ' ';
let b = 12345678;


button.addEventListener('click' , ()=>{
    if(text.value == a){
        text.style.border = " solid 2px lime"
    }else{
        text.style.border = " solid 2px lime"
    };

    if(password.value == b){
        password.style.border = " solid 2px lime"
        setTimeout(() => {
            window.location.href = '/pages/indexs.html'
          }, "1000");
    }else{
        password.style.border = " solid 2px red"
    }
})