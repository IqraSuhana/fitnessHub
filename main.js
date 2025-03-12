let navbar=document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=()=>{
    navbar.classList.toggle('active');
}

let para1=document.querySelector('#service-para1');
document.querySelector('#down-arrow1').onclick=()=>{
    para1.classList.toggle('active');
    para2.classList.remove('active');
    para3.classList.remove('active');
    para4.classList.remove('active');
}
let para2=document.querySelector('#service-para2');
document.querySelector('#down-arrow2').onclick=()=>{
    para2.classList.toggle('active');
    para1.classList.remove('active');
    para3.classList.remove('active');
    para4.classList.remove('active');

}
let para3=document.querySelector('#service-para3');
document.querySelector('#down-arrow3').onclick=()=>{
    para3.classList.toggle('active');
    para1.classList.remove('active');
    para2.classList.remove('active');
    para4.classList.remove('active');

}
let para4=document.querySelector('#service-para4');
document.querySelector('#down-arrow4').onclick=()=>{
    para4.classList.toggle('active');
    para1.classList.remove('active');
    para2.classList.remove('active');
    para3.classList.remove('active');

}