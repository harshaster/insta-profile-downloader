function donetyping(){
    document.getElementsByClassName("not-found")[0].style.display="none";
    dwn.classList.toggle("disabled");
    document.getElementsByClassName("found")[0].style.display="none";
    const loader=document.getElementsByClassName("loader-wrap")[0];
    loader.style.display="block";
    const uname=document.getElementsByName("username")[0].value;
    var xhr = new XMLHttpRequest();
    xhr.open('post',"/"+uname)
    xhr.send()
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        
        var url = xhr.responseText;
        if(url){
            const dwn=document.getElementById("download");
            dwn.setAttribute('href',url);
            dwn.classList.toggle("disabled");
            document.getElementsByClassName("found")[0].style.display="block";
            loader.style.display="none";
        }
        else{
            loader.style.display="none";
            document.getElementsByClassName("not-found")[0].style.display="block";
            
        }
        
        
        }
    }
    
    
};