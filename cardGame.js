var start=document.querySelector('#start');
var game=document.querySelector('#rand');
var card=document.querySelectorAll('.card');
var number=document.querySelectorAll('.cardNumber');
var karta=document.getElementById('numer1');
var card1=document.querySelectorAll('.numer');
var next=document.querySelector('.next');
var left=document.querySelector('#left_points');
var right=document.querySelector('#right_points');
var pts1;
var pts2;
var txt;
var txt2;
var c1;
var c2;
var img=document.querySelectorAll('.karta');
var sumBlack=7;
var sumRed=7;
function reset(){
    location.reload();
}
function startGame(){
    start.style.setProperty('display','none');
    game.style.setProperty('display','block');
}
function play(){
    img[0].classList.remove('change');
    for(let x=0;x<card.length;x++){
        card[x].style.setProperty('display','none');
    }
    for(let x=0;x<number.length;x++){  
        number[x].style.setProperty('display','block');
        game.style.setProperty('display','none');
        next.style.setProperty('display','block');
    }
    txt=document.createTextNode(chance.integer({min: 2,max: 15}));
    switch(txt.textContent){
        case '2':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/2.png');
            img[0].classList.add('change');
            c1=2;
            break;
        case '3':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/3.png');
            img[0].classList.add('change');
            c1=3;
            break;
        case '4':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/4.png');
            img[0].classList.add('change');
            c1=4;
            break;
        case '5':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/5.png');
            img[0].classList.add('change');
            c1=5;
            break;
        case '6':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/6.png');
            img[0].classList.add('change');
            c1=6;
            break;
        case '7':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/7.png');
            img[0].classList.add('change');
            c1=7;
            break;
        case '8':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/8.png');
            c1=8;
            break;
        case '9':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/9.png');
            c1=9;
            break;
        case '10':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','cardGameImg/10.png');
            c1=10;
            break;
        case '11':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','CardGameImg/jack.png');
            c1=11;
            break;
        case '12':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','CardGameImg/queen.png');
            c1=12;
        case '13':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','CardGameImg/king.png');
            c1=13;
            break;
        case '14':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','CardGameImg/as.png');
            c1=14;
            break;
        case '15':
            img[0].removeAttribute('src','');
            img[0].setAttribute('src','CardGameImg/joker.png');
            c1=15
            break;
    }
    txt2=document.createTextNode(chance.integer({min: 2,max: 15}));
    console.log("1 karta: "+txt.textContent);
    console.log("2 karta: "+txt2.textContent);
    switch(txt2.textContent){
        case '2':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/22.png');
            c2=2;
            break;
        case '3':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/32.png');
            c2=3;
            break;
        case '4':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/42.png');
            c2=4;
            break;
        case '5':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/52.png');
            c2=5;
            break;
        case '6':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/62.png');
            c2=6;
            break;
        case '7':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/72.png');
            c2=7;
            break;
        case '8':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/82.png');
            c2=8;
            break;
        case '9':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/92.png');
            c2=9;
            break;
        case '10':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','cardGameImg/102.png');
            c2=10;
            break;
        case '11':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','CardGameImg/jack2.png');
            c2=11;
            break;
        case '12':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','CardGameImg/queen2.png');
            c2=12;
        case '13':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','CardGameImg/king2.png');
            c2=13;
            break;
        case '14':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','CardGameImg/as2.png');
            c2=14;
            break;
        case '15':
            img[1].removeAttribute('src','');
            img[1].setAttribute('src','CardGameImg/joker.png');
            c2=15;
            break;
    }
}
function sum(){
    next.style.setProperty('display','none');
    game.style.setProperty('display','block');
    if(c1>c2){
        sumBlack+=1;
        sumRed-=1;
    }if(c1<c2){
        sumBlack-=1;
        sumRed+=1;
    }if(c1==c2){
        alert("WAR!!!");
        play();
    }if(sumBlack==0){
        alert("You lose");
        reset();
    }else if(sumRed==0){
        alert("You win");
        reset();
    }
    console.log(sumBlack);
    console.log(sumRed);
    if(left.hasChildNodes()){
        left.removeChild(pts1);
    }
    if(!(left.hasChildNodes())){
        pts1=document.createTextNode(sumBlack);
        left.appendChild(pts1);
    }
    if(right.hasChildNodes()){
        right.removeChild(pts2);
    }
    if(!(right.hasChildNodes())){
        pts2=document.createTextNode(sumRed);
        right.appendChild(pts2);
    }
}

start.addEventListener('click',startGame);
game.addEventListener('click',play);
next.addEventListener('click',sum);
