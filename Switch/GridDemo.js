onload=function(){loadFn();}
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
            bms[i].style.backgroundColor="blue";
        }   
    var pull=document.getElementById(puller);
    pull.classList.add("pullDown");
    pull.style.backgroundColor="red";
    window.location.href="#footer";
}
function bmenu()
{
    var log=document.getElementById("mlogo");
    var m1=document.getElementsByClassName("nav1")[0];
    var m2=document.getElementsByClassName("nav2")[0];
    
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