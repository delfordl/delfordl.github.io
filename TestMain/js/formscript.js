    var submitted = false;
    var ns=0,nb=0;
    window.addEventListener("load",needAName);
    new WOW().init();
    window.onload=function wowoff()
    {
        var x=document.getElementsByClassName("wow");
        for (var i=0;i<x.length;i++)
            {
                x[i].dataset.wowOffset=x[i].offsetHeight/10;
            }
    }
    

    function needAName()
    {
        var preflist=document.getElementsByClassName("preflist");
        var sb=document.getElementsByClassName("subbtn");
        var i;
        for (i=0;i<preflist.length;i++)
            {
                preflist[i].addEventListener("change", function(){setB(this.id,this.value);});
                preflist[i].addEventListener("change", function(){setQ(this.parentElement.id,this.value);});
                preflist[i].addEventListener("change", function(){secondaryPrefs(this.id);});
                
            }
        for(i=0;i<sb.length;i++)
            {
                sb[i].addEventListener("click",function(){beforesub(this.id);});
            }
    }
    /*function beforesub(bid)
    {
        var hid,i,rank;
        var sb=document.getElementsByClassName("subbtn");
        switch(bid)
            {
                    case"b1":rank=1;hid="hide1"break;
                    case"b2":rank=2;hid="hide2"break;
                    case"b3":rank=3;hid="hide3"break;
                default:break;
            }
        var hiddenf=document.getElementsByClassName("hide")
        for(i=0;i<hiddenf.length;i++)
            {
                hiddenf[i].querySelectorAll("textarea").name="";
                if(hiddenf[i].id==hid)
                    {
                        hiddenf[i].querySelectorAll("textarea")[0].name="entry.260531291";
                        hiddenf[i].querySelectorAll("textarea")[1].name="entry.722795158";
                    }
            }
        document.querySelector("form").action=document.getElementById(bid).formaction;
        document.getElementById(bid).innerHTML=document.getElementById(bid).inner.replace("Apply","Applied");
        document.getElementById(bid).disabled=true;
        document.getElementById("prio").value=rank;
        document.querySelector("form").submit();
    }*/
    function beforesub(bid) //textarea
    {
        var hid,i,rank;
        var sb=document.getElementsByClassName("subbtn");
        /*switch(bid)
            {
                    case"b1":rank=1;hid="hide1";break;
                    case"b2":rank=2;hid="hide2";break;
                    case"b3":rank=3;hid="hide3";break;
                default:break;
            }Removed Switch*/
	rank=bid[1];
	hid="hide"+bid[1];
        var hiddenf=document.getElementsByClassName("hide")
        for(i=0;i<hiddenf.length;i++)
            {
                hiddenf[i].querySelectorAll("textarea")[0].name="";
		hiddenf[i].querySelectorAll("textarea")[1].name="";
                if(hiddenf[i].id==hid)
                    {
                        hiddenf[i].querySelectorAll("textarea")[0].name="entry.260531291";
                        hiddenf[i].querySelectorAll("textarea")[1].name="entry.722795158";
                    }
            }
        var gq=document.getElementsByClassName("gq")
        for(i=0;i<gq.length;i++)
            {
                gq[i].disabled=true;
            }
        var pdiv=document.getElementById("pdiv"+bid[1]);
        pdiv.querySelector("select").disabled=true;
        pdiv.querySelectorAll("textarea")[0].disabled=true;
        pdiv.querySelectorAll("textarea")[1].disabled=true;
        
        document.querySelector("form").action=document.getElementById(bid).formaction;
        document.getElementById(bid).innerHTML=document.getElementById(bid).innerHTML.replace("Apply","Applied")
        document.getElementById(bid).disabled=true;
        document.getElementById("prio").value=rank;
	ns+=1;
        document.querySelector("form").submit();
	if(ns==nb)
	{
		window.location="thanks.html";
	}
    }
    function secondaryPrefs()
    {
        var l1=document.getElementById("p1");
        var l2=document.getElementById("p2");
        var l3=document.getElementById("p3");
        var i;
        for(i=0;i<l1.options.length;i++)
            {
                if((l1.options[i].value==l2.value)||(l1.options[i].value==l3.value)&&(l1.options[i].value!="N"))
                    {
                        l1.options[i].disabled=true;
                    }
            }
        if(l1.value!="N")
            {
                l2.disabled=false
                for(i=0;i<l2.options.length;i++)
                    {
                        l2.options[i].disabled=false;
                        if((l1.value==l2.options[i].value)||(l3.value==l2.options[i].value)&&(l2.options[i].value!="N"))
                            {
                                l2.options[i].disabled=true;
                            }
                    }
            }
        else
            {
                l2.disabled=true;
            }
        if((l1.value!="N")&&(l2.value!="N"))
        {
            l3.disabled=false;
            for(i=0;i<l3.options.length;i++)
                {
                    l3.options[i].disabled=false;
                    if((l3.options[i].value==l1.value)||(l3.options[i].value==l2.value)&&(l3.options[i].value!="N"))
                        {
                            l3.options[i].disabled=true;
                        }
                }
        }
        else
        {
            l3.disabled=true;
        }
    }
    function setQ(pardivid,dept)
    {
        var q1,q2;
        switch(dept)
        {
            case "d1": q1="Dep 1 Q";
		       q2="Dep 1 Q2";break;
        case "Performing Arts": 
                q1="PA1";
                q2="PA2";
                break;
        case "Contempory Arts and Live Arts": 
                q1="CALA1";
                q2="CALA2";
                break;
        case "Fine Arts and Digital Arts": 
                q1="FADA1";
                q2="FADA2";
                break;
        case "Speaking Arts and Literary Arts": 
                q1="SALA1";
                q2="SALA2";
                break;
        case "Gaming and Sports": 
                q1="GASP1";
                q2="GASP2";
                break;
        case "Chaos": 
                q1="Chaos1";
                q2="Chaos2";
                break;
        case "Nukkad": 
                q1="Nukkad1";
                q2="Nukkad2";
                break;
        case "Registration": 
                q1="Reg1";
                q2="Reg2";
                break;
        case "Scoring": 
                q1="Sc1";
                q2="Sc2";
                break;
        case "Security": 
                q1="Sec1";
                q2="Sec2";
                break;
        case "Logistics": 
                q1="Log1";
                q2="Log2";
                break;
        case "Tech": 
                q1="Tech1";
                q2="Tech2";
                break;
        case "Entertainment": 
                q1="E1";
                q2="E2";
                break;
        case "Finance": 
                q1="F1";
                q2="F2";
                break;
        case "External Public Relations": 
                q1="EPR1";
                q2="EPR2";
                break;
        case "Internal Public Relations": 
                q1="IPR1";
                q2="IPR2";
                break;
        case "Celebrity Management": 
                q1="CM1";
                q2="CM2";
                break;
        case "Hospitality": 
                q1="Hosp1";
                q2="Hosp2";
                break;
        case "Marketing": 
                q1="Mark1";
                q2="Mark2";
                break;
        case "Digital Content": 
                q1="DC1";
                q2="Dc2";
                break;
        case "Creatives": 
                q1="Crea1";
                q2="Crea2";
                break;
        case "Souvenirs": 
                q1="Souvi1";
                q2="Souvi2";
                break;
        case "Coverage": 
                q1="Cov1";
                q2="Cov2";
                break;
		//23 cases
            default:break;
        }
        var hiddendiv=document.getElementById(pardivid);
        hiddenf=hiddendiv.getElementsByClassName("hide");
        if(dept=="N")
            {
                hiddenf[0].style.display="none";
		hiddenf[0].querySelectorAll("label")[0].innerHTML="";
                hiddenf[0].querySelectorAll("label")[1].innerHTML="";
                hiddendiv.querySelectorAll("textarea")[0].required=false;
		hiddendiv.querySelectorAll("textarea")[1].required=false;

            }
        else
            {
                hiddenf[0].querySelectorAll("label")[0].innerHTML=q1;
                hiddenf[0].querySelectorAll("label")[1].innerHTML=q2;
                hiddendiv.querySelectorAll("textarea")[0].required=true;
                hiddendiv.querySelectorAll("textarea")[1].required=true;
		hiddenf[0].style.display="";
            }
    }
    function setB(pid,dept)
    {
        var link,dname,btn;
        switch(dept)
        {
            case "d1": link="https://docs.google.com/forms/d/e/1FAIpQLSfTwauTmxnCpZMBcJ_jp2WVA04QnA5G0y6ph1KzRnFxGU3-Ng/formResponse";break;
            case "d2": link="https://docs.google.com/forms/d/e/1FAIpQLScLXNzHmwLR66gTFe3ZMFSe-fTDlc8iDYILvJZZxnLQ3fRZ6w/formResponse";break;
            case "d3": link="https://docs.google.com/forms/d/e/1FAIpQLSebMRyPuFm7iYCMnRKXazFYk1Bmjjwl-Z67DliJJDmFQqjPlQ/formResponse";break;
		//23 cases
            default:break;
        }
	dname="Apply to "+dept;
        /*switch(pid)
            {
                case "p1":btn="b1";break;
                case "p2":btn="b2";break;
                case "p3":btn="b3";break;
                default:break;
            }Removed Switch*/
	btn="b"+pid[1];
        btn=document.getElementById(btn);
        if(dept=="N")
            {
                btn.formaction="";
                btn.innerHTML="";
		btn.style.display="none";
		nb.value-=1;
            }
        else
            {
                btn.formaction=link;
                btn.innerHTML=dname;
                btn.style.display=""
		nb+=1;
            }
    }
    function w3_open() {
  var x = document.getElementById("mySidebar");
  var y = document.querySelector("body");
  x.style.width = "40%";
  x.style.fontSize = "20px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  var y = document.querySelector("body");
  y.style.opacity="initial";
  document.getElementById("mySidebar").style.display = "none";
}