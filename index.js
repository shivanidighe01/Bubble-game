var timer=6;
var score=0;
var rn=0;
function makeBubble()
{
var clutter="";
for(var i=1;i<=102;i++)
{
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`
}
document.querySelector(".lowerbar").innerHTML=clutter;
}
function runtimer()
{
    var timers=setInterval(function()
    {
        if(timer>0)
        {
        timer--;
        document.querySelector("#timerval").innerHTML=timer;
        }
        else
        {
            clearInterval(timers);
            document.querySelector(".lowerbar").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}
function getNewHit()
{
   rn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}
function increaseScore()
{
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector(".lowerbar")
.addEventListener("click",function(details)
{
   var clickedNum=Number(details.target.textContent);
   if(clickedNum===rn)
   {
    increaseScore();
    makeBubble();
    getNewHit();
   }
})
runtimer();
makeBubble();
getNewHit();
// increaseScore();