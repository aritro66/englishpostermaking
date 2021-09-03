window.addEventListener('load', () => {
    document.getElementById("loading").style.display="none";
    
    document.getElementById("togglebutton").addEventListener("click",()=>{
        document.getElementById("togglebutton").classList.toggle("display2");
        document.querySelectorAll("ul,li").forEach((ele)=>ele.classList.toggle("display1"));
    });
    setInterval(()=>{
        
        if(window.innerWidth>600)
        {
        
        if(document.getElementById("togglebutton").classList.contains("display2"))
        {
        document.getElementById("togglebutton").classList.remove("display2");
        }
        document.querySelectorAll("ul,li").forEach((ele)=>{
            if(ele.classList.contains("display1"))
            {
                ele.classList.remove("display1");
            }
        });
    
        }
    },50);
  });