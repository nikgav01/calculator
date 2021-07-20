let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
music=document.getElementById('music');
let screenvalue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText=='C')
        {
            screenvalue="";
            screen.value = screenvalue;
            music.play();
        }
        else if(buttonText=="=")
        {
        screen.value = eval(screenvalue);
        music.play();
        }
        else
        {
            screenvalue += buttonText;
            screen.value = screenvalue;
            music.play();
        }

    })
}


