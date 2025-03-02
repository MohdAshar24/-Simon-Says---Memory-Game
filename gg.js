let userarray=[];
let seqarray=[];
let start=false;
let level=0;
 let btnscls=["yellow","red","purple","green"];

let h3=document.querySelector('h3');

 let a=document.querySelector('h3');
 a.addEventListener("click",function(){
 if(start==false){
        start=true;
   lvlup();
    }
    
 });

 function lvlup(){
    userarray=[];
level++;
let h3=document.querySelector('h3');
h3.innerText=`level ${level}`;

let rndidx=Math.floor(Math.random()*3);
let idxclr=btnscls[rndidx];
let ans=document.querySelector(`.${idxclr}`);
seqarray.push(idxclr);
console.log(seqarray);
flash(ans);
}

function flash(idx){
    idx.classList.add("flash");
    setTimeout(function(){
        idx.classList.remove("flash");  
    },300);
}

function userclick(){
flash(this);
let clr=this.getAttribute('id');
userarray.push(clr);
console.log(userarray);
check(userarray.length-1);
}

let user=document.querySelectorAll('.btn');
for(u of user){
u.addEventListener("click",userclick);
}

function check(idx){
    if(seqarray[idx]==userarray[idx]){
        if(seqarray.length==userarray.length){
            setTimeout(lvlup,500);
        }
    }
    else{
        h3.innerHTML=`Game Over!! Your score is <b> ${level} </b> <br> Press any key to restart`;
        let b=document.querySelector('body');
        b.style.backgroundColor="red";
        setTimeout(function(){
        b.style.backgroundColor="white";

        },200);
setTimeout(reset,200);
    }
}

function reset(){
    seqarray=[];
    userarray=[];
    level=0;
    start= false;
}