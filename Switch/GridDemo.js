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
function imgswitch(i)
{
    document.getElementById(i).classList.remove("fadeOut");
    document.getElementById(i).classList.remove("fadeIn");
    document.getElementById(i).classList.add("fadeOut");
    if(document.getElementById(i).src.includes("Cover.jpeg"))
    {
        document.getElementById(i).src="Pg1.jpeg";
    }
    else
    document.getElementById(i).src="Cover.jpeg";
    document.getElementById(i).classList.remove("fadeOut");
    document.getElementById(i).classList.add("fadeIn");
}
function pull(puller)
{
    var bms=document.getElementsByClassName("bm");
    var pull=document.getElementById(puller);
    var nItems=document.getElementsByClassName("news");
    
    for (var i=0;i<bms.length;i++)
        {
            bms[i].classList.remove("pullDown");
            bms[i].style.backgroundColor="teal";
        }   
    pull.classList.add("pullDown");
    pull.style.backgroundColor="#662d91";
    /*var href="#"
    switch(puller.charAt(2))
        {
            case '1':href="Events";break;
            case '2':href="Registration";break;
            case '3':href="Blog";break;
            case '4':href="Crew";break;  
                
            default:href="#";break;
        }
    for(var i=0;i<nItems.length;i++)
        {
            if(nItems[i].style.display!="none")
                {
                    nItems[i].classList.add("fadeOutLeftBig");
                    setTimeout(function(){nItems[i].style.display="none";},3000);
                }
            
                
                    nItems[i].classList.remove("fadeOutLeftBig");
                    nItems[i].classList.remove("fadeInRightBig");
                    nItems[i].style.display="none";
                
            if(nItems[i].id==href)
                {
                    nItems[i].style.display="inline";
                    nItems[i].classList.add("fadeInRightBig");
                }
        }
/*    for(var i=0;i<nItems.length;i++)
        {
            if(nItems[i].id==href)
                setTimeout(function(){{
                    nItems[i].classList.remove("fadeOutLeft");
                    nItems[i].classList.add("fadeInRight");
                }
            },3000)
        }
    
    window.location.href="#"+href;*/
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