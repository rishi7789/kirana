let searchbar=document.querySelector('.searchform');
document.querySelector('#search-btn').onclick=()=>{
    searchbar.classList.toggle('active');  //active class banaya gaya
}
let loginbox=document.querySelector('.loginform');
document.querySelector('.btn').onclick=()=>{
    loginbox.classList.toggle('active'); //active class banaya gaya
}

let index=1;
showImg(index);
function dotslide(e){
    showImg(index = e);
}
function slide(e){
    showImg(index += e);
}
function showImg(e) {
    var i;
    const img=document.querySelectorAll('.images img');
    const sliders=document.querySelectorAll('.sliders span');
    if (e>img.length) {
        index=1;
    }
    if (e<1) {
        index=img.length;
    }
    for (let i = 0; i<img.length; i++) {
        img[i].style.display="none";
    }
    img[index-1].style.display="block";
}