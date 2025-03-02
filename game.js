let seqarray=[];
let userarray=[];
 let  start=false;
 let highscore=0;
 
 let ranbutton=["yellow","green","red","purple"];

 let level=0;
 let h3=document.querySelector('h3');

  document.addEventListener("click",function(){
    if(start==false){
        // console.log("game started");
        start=true;
        levelup();
    }
             
});

 function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}


function levelup(){
userarray=[];
level++;
h3.innerText=`level ${level}`;
let mathran=Math.floor(Math.random()*3);
let coloris=ranbutton[mathran];


let finalcolor=document.querySelector(`.${coloris}`);
 flash(finalcolor);
 seqarray.push(coloris);
 console.log(seqarray);
}
  function checkans(idx){

    // let idx=level-1;
    if(userarray[idx]==seqarray[idx]){
        if(userarray.length==seqarray.length){
         setTimeout(levelup,700);
        }}
        else{
            
            if(highscore<level){
                highscore=level;
                
            }
            
            h3.innerHTML=`Game over !! your score was <b> ${level} </b> Highest Score is ${highscore} <br> Press any key to restart`;
            document.querySelector('body').style.backgroundColor="red";
setTimeout(function(){
    document.querySelector('body').style.backgroundColor="white";
},150);
            setTimeout(reset,100);
        }
    
  }

function btnprsd(){
    // let btn=this;
    flash(this);
    let color=this.getAttribute("id");

    userarray.push(color);
    console.log(userarray);
checkans(userarray.length-1);
}

let btns=document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener("click",btnprsd);
}
function reset(){

    start=false;
    userarray=[];
    seqarray=[];
    
    level=0;
}
