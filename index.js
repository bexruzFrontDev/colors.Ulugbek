let main = document.querySelector('.main')
let inp = document.querySelector('.form input')
let btn = document.querySelector('.form button')
let qrImg = document.querySelector('.qr-code img')

btn.addEventListener('click', function(){
    let qrValue = inp.value;
    console.log(qrValue);
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=
    200x200&data=${qrValue}`;
    main.classList.add('active')
})