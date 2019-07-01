    var submitted = false;
    var ns=0,nb=0;
    window.addEventListener("load",needAName);
    new WOW().init();

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
    function beforesub(bid) //textarea
    {
        var hid,i,rank;
        var b=document.getElementById(bid);
        var sb=document.getElementsByClassName("subbtn");
        var hiddenf=document.getElementsByClassName("hide");
        var gq=document.getElementsByClassName("gq");
        var sel=document.querySelectorAll("select");
        var pdiv=document.getElementById("pdiv"+bid[1]);
        
        /*Set Form Action*/
        /*Set Hidden Field*/
        /*Check for Unfilled fields*/
        /*Set/unset name for dept specific Qs*/
        /*Re-enable disabled fields*/
        /*Submit*/
        /*Disable Button, increment counter*/
        /*Disable fields*/
        /*Check for animation*/
        
	    hid="hide"+bid[1];
        document.querySelector("form").action=b.formaction;//1
        
        rank=bid[1]; //2
        document.getElementById("prio").value=rank;
        
        //3
        for(i=0;i<gq.length;i++)
            {
                gq[i].style.borderColor="#ccc";
                if(gq[i].value=="")
                    {
                        gq[i].style.borderColor="red";
                        return false;
                    }
            }
        
        for(i=0;i<hiddenf.length;i++)//4+3
            {
                hiddenf[i].querySelectorAll("textarea")[0].name="";
		        hiddenf[i].querySelectorAll("textarea")[1].name="";
                if(hiddenf[i].id==hid)
                    {
                            hiddenf[i].querySelectorAll("textarea")[0].name="entry.260531291";
                            hiddenf[i].querySelectorAll("textarea")[0].style.borderColor="#ccc";
                            if(hiddenf[i].querySelectorAll("textarea")[0].value=="")
                                {
                                    hiddenf[i].querySelectorAll("textarea")[0].style.borderColor="red";
                                    return false;
                                }
                        hiddenf[i].querySelectorAll("textarea")[1].name="entry.722795158";
                        hiddenf[i].querySelectorAll("textarea")[1].style.borderColor="#ccc";
                        if(hiddenf[i].querySelectorAll("textarea")[1].value=="")
                                {
                                    hiddenf[i].querySelectorAll("textarea")[1].style.borderColor="red";
                                    return false;
                                }
                    }
            }
        
        for(i=0;i<gq.length;i++) //5
            {
                gq[i].disabled=false;
            }
        for(i=0;i<sel.length;i++)
        {
            sel[i].disabled=false;
        }
        
        document.querySelector("form").submit(); //6
        
        b.disabled=true;//7
        b.innerHTML=b.innerHTML.replace("Apply","Applying");
        setTimeout(function(){b.innerHTML=b.innerHTML.replace("Applying","Applied");},3500)

        for(i=0;i<gq.length;i++)//8
            {
                gq[i].disabled=true;
            }/*Disable Drop downs */
        secondaryPrefs();
        for(i=0;i<sb.length;i++)
            {
                if(sb[i].disabled==true)
                    {
                        document.getElementById("p"+sb[i].id[1]).disabled=true;
                    }
            }
        
        pdiv.querySelectorAll("textarea")[0].disabled=true;
        pdiv.querySelectorAll("textarea")[1].disabled=true;/* Disable Specific*/
        
        ns+=1; //9
        nb=0;
         for(i=0;i<sb.length;i++)
            {
                if(sb[i].style.display=="")
                    {
                        nb++;
                    }
            }
        if(ns==nb)
	    {
            setTimeout(function(){document.getElementById("animation").style.display="";window.location+="#animation"},2000);
        
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
                l1[i].disabled=false;
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
        l1[0].disabled=true;
        sel=document.querySelectorAll("select");/*Makes selected dropdowns mosaic-gradiented*/
        for(i=0;i<sel.length;i++)
            {
                if((sel[i].value!="N")&&(!sel[i].className.includes("w3-mosaic-theme")))
                    {
                        sel[i].className+=" w3-mosaic-theme"
                    }
            }
    }
    function setQ(pardivid,dept)
    {
        var q1,q2;
        switch(dept)
        {
        case "Performing Arts": 
                q1="What are your expectations for this volunteer position?";
                q2="Have you worked before for events? Share your experience";
                break;
        case "Contempory Arts and Live Arts": 
                q1="CALA1";
                q2="CALA2";
                break;
        case "Fine Arts and Digital Arts": 
                q1="Can you help in managing  technical difficulties that occur during the event especially digital art event?";
                q2="Are you good with time management? Mention an instance.";
                break;
        case "Speaking Arts and Literary Arts": 
                q1="What would be the name of your biopic and what would it's highlights be?";
                q2="If you could wake up and have gained any one quality or ability, what would it be and why?";
                break;
        case "Gaming and Sports": 
                q1="Can you help in managing technical difficulties that occur during the event especially with gaming?";
                q2="How would you deal with aggressive impatient participants if the event is delayed?";
                break;
        case "Chaos": 
                q1="If there's a delay in a particular event and the participants get impatient, what will you do?";
                q2="What is the recipe for disaster?";
                break;
        case "Nukkad": 
                q1="Have you ever managed multiple tasks assigned to you? Did you complete it successfully and if so, how?";
                q2="How will you deal with an aggressively demanding participant?";
                break;
        case "Registration": 
                q1="What are the possible problems you think you could face before and during the fest?";
                q2="What would be your ideal plan for the efficiency of the department to make this fest bigger and better this year?";
                break;
        case "Scoring": 
                q1="Have you worked in a fest prior?";
                q2="Were you a part of mosaic last year?";
                break;
        case "Security": 
                q1="If you found someone smoking, drinking, etc in college during the fest, what would you do?";
                q2="If a fight starts in an audience during a crowded event, what would you do to contain it?";
                break;
        case "Logistics": 
                q1="What made you choose logistics?";
                q2="Are you okay with waiting back after lectures?";
                break;
        case "Technicals": 
                q1="Why are you interested in joining this department?";
                q2="What kind of experience do you have to be a part of this department?";
                break;
        case "Entertainment": 
                q1="Are you spontaneous enough to take a decision while your department HOD isn't present at that given point of time? ";
                q2="Do you have knowledge about any performing art? (If yes, state which and your experience in that particular field)";
                break;
        case "Finance": 
                q1="How do you keep your budgets on track?";
                q2="Name 2 things about finance that interest you.";
                break;
        case "External Public Relations": 
                q1="Do you find it particularly easy to approach new people and spark a conversation with them?";
                q2="How would you deal with an aggressively demanding contingent?";
                break;
        case "Internal Public Relations": 
                q1="Suggest a creative idea for external Mosaic promotions.";
                q2="How will you create a buzz in college about Mosaic?";
                break;
        case "Celebrity Management": 
                q1="Have you worked under celebrity management before? What kind of work and for whom?";
                q2="How would you accomodate a last minute change with a judge running late?";
                break;
        case "Hospitality": 
                q1="How good are you with multitasking?";
                q2="What do you think is expected of a hospitality volunteer?";
                break;
        case "Marketing": 
                q1="What do you think is the role of the marketing dept in a fest?";
                q2="How would you negotiate with sponsors, vendors, and partners to make more room in the budget?";
                break;
        case "Digital Content": 
                q1="Are you a frequent social media user? If yes, how often do you use social media?";
                q2="On a scale of 1-10, (1 being the least and 10 being the most), how creative do you think you are?";
                break;
        case "Creatives": 
                q1=" In terms of the theme, i.e. 'Tell your Story', come up with an idea or ideas to bring out the essence of the theme revolving around youth/characters/stories, etc. in the decor or art installments or anything to liven the fest.";
                q2="What would you define yourself as a colour and why?";
                break;
        case "Souvenirs": 
                q1="If you were ONLY given  icecream sticks, twine, a marker,  some cardboard, a few buttons, and a pair of scissors, What would you make, so that we could sell it?";
                q2="If you were given a blank wall as a canvas, and were asked to promote Mosaic without writing the name of the fest down, what would you draw/paint?";
                break;
        case "Coverage": 
                q1="What do you prefer photography or videography?";
                q2="How experienced are you in your field?";
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
        case "Performing Arts": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSc4ayK8a802bPMKmgue06pHBf3qp2SS-6IdrIce3QHUJIK69Q/formResponse";
                break;
        case "Contempory Arts and Live Arts": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSd2oxNPU93sIEYAxu35KZe4piy1Gp9GYm_QkZ34pFTggnPQAA/formResponse";
                break;
        case "Fine Arts and Digital Arts": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSc1-2aQucnnOxc0e6j1NV96AKGTpQZPGuA4K5vWL1WNBXVcBA/formResponse";
                break;
        case "Speaking Arts and Literary Arts": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSf9So65fi-D_qCPkeoKKyCQtPEYqmTnko2p-C1j1u7wbCqT6g/formResponse";
                break;
        case "Gaming and Sports": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScFTukLk1VMfjAaVqLFTRtHb-TBjBgKDb9tvIsVKqVwdmoOpw/formResponse";
                break;
        case "Chaos": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSdFdx3m0SvZpM4-vQ4igELexHhcNkKO4KyKklinkDoTVRTFDcAg/formResponse";
                break;
        case "Nukkad": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSdZg9qIgdKZhDt8mIh7EO93AmD2IJJat3TiYT0CLZVepAi0Og/formResponse";
                break;
        case "Registration": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSfZR508r2lW5RAT0CDoIP1PrK4ePNr5UXQ7FRT_nC5roeQKYw/formResponse";
                break;
        case "Scoring": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScbUWiVB08vj96Uuk_glKPiuQyhXp4B6V9VToyHxI9FICzq4A/formResponse";
                break;
        case "Security": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSeITrnT_qPrp5p-CS86xAyDrNaCKuGOhmojPpusSdX4PGQBaQ/formResponse";
                break;
        case "Logistics": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSfJHOzc5OTWp8YVCowKSXvgL4uVrW6obfoyYikWuWmUjPOOGA/formResponse";
                break;
        case "Technicals": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSeC0LKRtY0Nr7t7_Z4rTJHDGpG2vkxWV3JOUuIizVwxwMN1ig/formResponse";
                break;
        case "Entertainment": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSfKRI_BCZVNxwIJu71wtiG6FNctc06VK9hETNVxG0Aoxl8ZkA/formResponse";
                break;
        case "Finance": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScvuoeO3Pef0N_bfrib5BUgLEuOqjWFEf5NnFsN43cfQhq0xw/formResponse";
                break;
        case "External Public Relations": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScCYBbo2uw9um_zD9vvZmBhpBBbwDPSKG316HWxFRENnJb3JQ/formResponse";
                break;
        case "Internal Public Relations": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScJNexZe3KetVN_b2V_VmaNgJ8VQ6q53w8yCsEviTVyroS6HA/formResponse";
                break;
        case "Celebrity Management": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSe_92NTYBfq0lA0LmWO82QHpBFI9OM_FfogsQzm5Ye1SN5w8g/formResponse";
                break;
        case "Hospitality": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSd8zHL9rKB9HJgASEYpqndFGFtAbWHu1Fq1wG2VlsMM2su3Ag/formResponse";
                break;
        case "Marketing": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScYFgbEx4GmnGUm64fxNWWiHL2ZwexUMqw_PZHadXb7qDW5nQ/formResponse";
                break;
        case "Digital Content": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSfYG-_w3zWAiTTfWfDE0AVogaU8d9z9FZVkEkeYAFfHc6I9Cg/formResponse";
                break;
        case "Creatives": 
                link="https://docs.google.com/forms/d/e/1FAIpQLScQkln2Xi7rMiobmsySU_LFkPhAmxejr_JVk-ed4HzF11mdQw/formResponse";
                break;
        case "Souvenirs": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSe6SMqD9TnRKlWs3OCAb5RN54GTzDttaZdiH20aJt5UKag_3w/formResponse";
                break;
        case "Coverage": 
                link="https://docs.google.com/forms/d/e/1FAIpQLSeejim5yyxAVHh4v-cM0EWAkrUvF6Wu_2HnL28mndwlDWsWvg/formResponse";
                break;
		//23 cases
            default:break;
        }
	dname="Apply to "+dept;
	btn="b"+pid[1];
        btn=document.getElementById(btn);
        if(dept=="N")
            {
                btn.formaction="";
                btn.innerHTML="";
		btn.style.display="none";
            }
        else
            {
                btn.formaction=link;
                btn.innerHTML=dname;
                btn.style.display="";
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