onload=function(){loadFn();}
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    bmenu();
  } else {
    tmenu();
  }
}

// Initial state
/*var scrollPos = 0;
var cSec
// adding scroll event
 window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos)
		cSec--;
        if(cSec<=0) cSec=0;
	else
		cSec++;
        if(cSec>=localArray.length) cSec=localArray.length;
	// saves the new position for iteration.
    if(!window.location.href.includes(localArray[cSec])) window.location.href=localArray[cSec];
    setTimeout(function(){document.write();},10000);
	scrollPos = (document.body.getBoundingClientRect()).top;
});
var localArray=["#anch1","#anch2", "#fb", "#yt"];*/
function loadFn()
{
    var bms=document.getElementsByClassName("bm");
    var log=document.getElementsByClassName("logo")[0];
    for (var i=0;i<bms.length;i++)
        {
            bms[i].addEventListener("click",function(){pull(this.id);});
        }
    log.addEventListener("click",function(){menuswitch();});
    
}
function pull(puller)
{
    var bms=document.getElementsByClassName("bm");
    for (var i=0;i<bms.length;i++)
        {
            bms[i].classList.remove("pullDown");
            bms[i].style.backgroundColor="teal";
        }   
    var pull=document.getElementById(puller);
    pull.classList.add("pullDown");
    pull.style.backgroundColor="#662d91";
    var href="#"
    switch(puller.charAt(2))
        {
            case '1':href="#";break;
            case '2':href="#";break;
            case '3':href="#";break;
            case '4':href="#";break;
            case '5':href="#";break;
            case '6':href="#";break;    
                
            default:href="#";break;
        }
    window.location.href="#"
}
function bmenu()
{
    var log=document.getElementById("mlogo");
    var m1=document.getElementsByClassName("nav1")[0];
    var m2=document.getElementsByClassName("nav2")[0];
    document.getElementById("mlogo").addEventListener("click",function(){window.location.href="#";});
    
    log.classList.remove("logoswitch");
    log.classList.remove("logounswitch");
    m1.classList.remove("mDown");
    m2.classList.remove("mUp");
    m2.classList.remove("mDown");
    m1.classList.remove("mUp");
    log.classList.add("logoswitch");
    m1.classList.add("mUp");
    m2.classList.add("mDown");
    
}
function tmenu()
{
    var log=document.getElementById("mlogo");
    var m1=document.getElementsByClassName("nav1")[0];
    var m2=document.getElementsByClassName("nav2")[0];
    document.getElementById("mlogo").removeEventListener("click",function(){window.location.href="#";});
    
    log.classList.remove("logoswitch");
    log.classList.remove("logounswitch");
    m1.classList.remove("mUp");
    m2.classList.remove("mDown");
    m1.classList.remove("mDown");
    m2.classList.remove("mUp");
    log.classList.add("logounswitch");
    m1.classList.add("mDown");
    m2.classList.add("mUp");

}