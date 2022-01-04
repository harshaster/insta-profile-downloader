
var typingtimer;
var doneTypInt = 3000;
const x=document.getElementsByName("username")[0]


x.addEventListener('keyup',function(){
    clearTimeout(typingtimer);
    typingtimer=setTimeout(donetyping,  doneTypInt)
    const dwn=document.getElementById("download");
    dwn.setAttribute('href',"#");
    dwn.style.display="none";
});

x.addEventListener('keydown',function(){
    clearTimeout(typingtimer);
});

function donetyping(){
    const loader=document.getElementsByClassName("loader-wrap")[0];
    loader.style.display="block";
    const uname=document.getElementsByName("username")[0].value;
    console.log(uname);
    var xhr = new XMLHttpRequest();
    xhr.open('post',"/"+uname)
    xhr.send()
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        
        var url = xhr.responseText;
        console.log(url);
        
        const dwn=document.getElementById("download");
        dwn.setAttribute('href',url);
        dwn.style.display="block";
        loader.style.display="none";
        }
    }
    
    
};