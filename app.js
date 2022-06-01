let result= document.querySelector('#result');
let target= document.querySelector('#target');
let button1= document.querySelector('#player1');
let button2= document.querySelector('#player2');
let p1score= document.querySelector('.p1score');
let p2score= document.querySelector('.p2score');
let reset = document.querySelector('#Reset ');
result.innerText= 'No one won';
let canplay= 1;

reset.addEventListener('click',resetgame)
function resetgame()
{
    
target.innerText = generate_target();   
button1.disabled=false;
button2.disabled=false;
result.innerText= 'No one won';
p1score.innerText=0;
p2score.innerText=0;

}


function generate_target()
{
 return Math.floor(Math.random()*10)+1;
}
function updatescore(e)
{
    
let score= generate_target();
console.dir(e);
if(e.target.id=='player1')
{
p1score.innerText= score;
button1.disabled=true;
button2.disabled=false;
}
else
{
p2score.innerText= score;
button2.disabled=true;
button1.disabled=false;
}
if(score==target.innerText)
{
result.innerText= e.target.id+" Won";
button1.disabled=true;
button2.disabled=true;
}
}

target.innerText= generate_target();

button1.addEventListener('click',updatescore);
button2.addEventListener('click',updatescore);



