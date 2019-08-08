onload=function(){loadFn();}
window.onscroll = function() {myFunction();}

function RegCL(){
    var con=document.getElementById("Cname").value;
    var cl=document.getElementById("CL").value;
    var a1=document.getElementById("ACL1").value;
    var a2=document.getElementById("ACL2").value;
    var num=document.getElementById("Contact").value;
    var email=document.getElementById("E-mail").value;
    var cinfo=con+"|"+cl+"|"+a1+"|"+a2+"|"+num+"|"+email;    
    var date = new Date();
    date.setTime(date.getTime() + (90*24*60*60));
    expires = "; expires=" + date.toUTCString();
    
    document.cookie=cinfo+expires+"; path=/;"
    window.location="https://festmosaic.com/Registration/C_EventList
}

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
    if(document.cookie.length!=0)
        {
            var ck=document.cookie.split("|");
            document.getElementById("Cname").value=ck[0];
            document.getElementById("CL").value=ck[1];
            document.getElementById("ACL1").value=ck[2];
            document.getElementById("ACL2").value=ck[3];
            document.getElementById("Contact").value=ck[4];
            document.getElementById("E-mail").value=ck[5];
        }
    else{
            document.getElementById("Cname").value="Please Register your Contingent";
            document.getElementById("CL").value="Please Register your Contingent";
            document.getElementById("ACL1").value="Please Register your Contingent";
            document.getElementById("ACL2").value="Please Register your Contingent";
            document.getElementById("Contact").value="Please Register your Contingent";
            document.getElementById("E-mail").value="Please Register your Contingent";    
    }
    var bms=document.getElementsByClassName("bm");
    var btns=document.getElementsByClassName("smb")
    for (var i=0;i<bms.length;i++)
        {
            bms[i].addEventListener("click",function(){pull(this.id);});
            bms[i].addEventListener("mouseover",function(){bmHover(this.id);});
            bms[i].addEventListener("mouseout",function(){bmReset();});
        }
    for (var i=0;i<btns.length;i++)
        {
            btns[i].addEventListener("mouseenter",function(){btnHover(this.id);});
            btns[i].addEventListener("mouseleave",function(){btnReset();});
        }    
}
function btnHover(hov)
{
    var hoverer=document.getElementById(hov);
    if(!hoverer.src.includes("2.png"))
    hoverer.src=hoverer.src.replace(".png","2.png");
}
function btnReset()
{
    var btns=document.getElementsByClassName("smb");
    for (var i=0;i<btns.length;i++)
        {
                {
                    btns[i].src=btns[i].src.replace("2.png",".png");
                }
        }       
}
function imgswitch(i)
{
    if(document.getElementById(i).src.includes("BroCover.png"))
    {
        document.getElementById(i).src="Pg1.png";
    }
    else
    document.getElementById(i).src="BroCover.png";
}
function imgswitchNews(i)
{
    if(document.getElementById(i).src.includes("CLBro"))
    {
        document.getElementById(i).src="CLCP.JPG";
    }
    else if(document.getElementById(i).src.includes("CLCP"))
        {
        document.getElementById(i).src="CLSetup1.JPG";
        }
        else if(document.getElementById(i).src.includes("CLSetup1"))
        {
        document.getElementById(i).src="CLHost.JPG";
        }
        else if(document.getElementById(i).src.includes("CLHost"))
        {
        document.getElementById(i).src="CLSetup2.JPG";
        }
        else if(document.getElementById(i).src.includes("CLSetup2"))
        {
        document.getElementById(i).src="CLBro.JPG";
        }
}
function pull(puller)
{
    var bms=document.getElementsByClassName("bm");
    var pull=document.getElementById(puller);
    //var nItems=document.getElementsByClassName("news");
    
    for (var i=0;i<bms.length;i++)
        {
            bms[i].classList.remove("pullDown");
            bms[i].style.backgroundColor="teal";
        }   
    pull.classList.add("pullDown");
    pull.style.backgroundColor="#662d91";
    var href;
    switch(puller.charAt(2))
        {
            case '0':href="https://festmosaic.com";break;
            case '1':href="https://festmosaic.com/Events";break;
            case '2':href="https://festmosaic.com/ComingSoon";break;
            case '3':href="https://festmosaic.com/ComingSoon";break;
            case '4':href="https://festmosaic.com/ComingSoon";break;  
                
            default:href="#";break;
        }
    /*for(var i=0;i<nItems.length;i++)
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
        }*/
    
    window.location=href;
}
function bmHover(hov)
{
    var hoverer=document.getElementById(hov);
    if(!hoverer.querySelector("img").src.includes("2.png"))
    hoverer.querySelector("img").src=hoverer.querySelector("img").src.replace(".png","2.png");
}
function bmReset()
{
    var bms=document.getElementsByClassName("bm");
    for (var i=0;i<bms.length;i++)
        {
            if(!bms[i].className.includes("selected"))
                {
                    bms[i].querySelector("img").src=bms[i].querySelector("img").src.replace("2.png",".png");
                }
        }       
}
function bmenu()
{
    var log=document.getElementById("mlogo");
    var m1=document.getElementsByClassName("nav1")[0];
    var m2=document.getElementsByClassName("nav2")[0];
    document.getElementById("mlogo").addEventListener("click",function(){window.location.href="#";});
    
    log.classList.remove("logoswitch");
    log.classList.remove("logounswitch");
    log.style.cursor="pointer";
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
    log.style.cursor="default";
    m1.classList.remove("mUp");
    m2.classList.remove("mDown");
    m1.classList.remove("mDown");
    m2.classList.remove("mUp");
    log.classList.add("logounswitch");
    m1.classList.add("mDown");
    m2.classList.add("mUp");

}