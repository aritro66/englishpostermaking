window.addEventListener('load', () => {
    document.getElementById("loading").style.display="none";
    var left=document.querySelector("#slider div:nth-child(1)");
var right=document.querySelector("#slider div:nth-child(2)");

var x=0;

var img_list=document.querySelectorAll("#img img");
function move() {
    img_list.forEach((ele,index)=>{
    ele.style.transform=`translateX(${-100*x}%)`;
});
}
var moveup=document.getElementById("floatingbutton");
setInterval(()=>{
    if(window.pageYOffset>0)
    {
        moveup.style.display="flex";
    }
    else
    {
        moveup.style.display="none";
    }
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
moveup.addEventListener("click",()=>{
    window.scrollTo(0,0);
});
// setInterval(()=>{
//     x+=1;
//     if(x==img_list.length)
//     {
//         x=0;
//     }
//     move();
// },3500);
right.addEventListener("click",()=>{
    x+=1;
    if(x==img_list.length)
    {
        x=0;
    }
    move();
});
left.addEventListener("click",()=>{
    x-=1;
    if(x==-1)
    {
        x=img_list.length-1;
    }
    move();
});

document.getElementById("togglebutton").addEventListener("click",()=>{
    document.getElementById("togglebutton").classList.toggle("display2");
    document.querySelectorAll("ul,li").forEach((ele)=>ele.classList.toggle("display1"));
});



  });

