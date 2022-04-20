let btn1=document.querySelectorAll("button");
let f=document.querySelector(".form");
let imag=document.querySelectorAll(".images")
let container=document.querySelectorAll(".container");
let bar=document.querySelectorAll(".bar");
let innerbar=document.querySelectorAll(".inner-bar");
let form=document.querySelector("form");
let uc_error=document.querySelector(".error-uc");
let platform_error=document.querySelector(".error-platform");

let name_error=document.querySelector("form .error-name");
let input=document.querySelector("form input");


//bar[1].style.margin="100px auto";
btn1[1].style.display="none"
console.log(window.innerWidth)
input.onkeyup=function(){
    name_error.style.display="none"
}
btn1[0].onclick=function(){
    let val=input.value.trim();
   if (val.length>0){ 
   form.style.display="none";
   bar[0].style.display="block";
   let i=0
   let increase=setInterval(function(){
       innerbar[0].style.width=i.toString()+"%";
       innerbar[0].textContent=i.toString()+"%";
       i+=1;
       if (i>100){
           clearInterval(increase);
           bar[0].style.display="none";
           innerbar[0].style.width="0%"
       }

       
   },40)

   setTimeout(function(){
       imag.forEach(el=>{
           el.style.display="flex"
       })
       btn1[1].style.display="block";
   
 },4000)
}else {
    name_error.style.display="block";
}
    
}
let finish=document.querySelector(".finish")
let overlay=document.querySelector(".overlay");
btn1[1].onclick=function(){
    let active_platform=document.querySelectorAll(".platform .active");
let active_uc=document.querySelectorAll(".uc .active");
    if (active_platform.length>0 && active_uc.length>0){
    let complete=document.querySelector(".complete");
    imag.forEach(el=>{
        el.style.display="none";
    })
    btn1[1].style.display="none";
    
    bar[1].style.display="block";
    finish.style.display="block"
    let i=0
    let increase=setInterval(function(){
        innerbar[1].style.width=i.toString()+"%";
        innerbar[1].textContent=i.toString()+"%";
        i+=1;
        if (i>100){
            clearInterval(increase);
            clearInterval(process);
           // p.style.display="none";
           // bar[1].style.display="none";
            //innerbar[1].style.width="0%";
            complete.style.display="block";
            p.style.display="none"
        }
 
        
    },200);

    let p=document.querySelector(".finish p");

    
    console.log(p)
    let inner_p=["verfing now..","processing now ......","please wait for a few seconds","connecting with server"];
    let j=0;
    p.textContent=inner_p[0]
    let process=setInterval(function(){
      
        
        if (j<inner_p.length){
           
            p.textContent=inner_p[j];
            j+=1;
        }else{
            p.textContent=inner_p[0];
            j=0
        }
        
    },1500);
    setTimeout(CPABuildLock, 20000);
}else {
    if (active_platform.length==0){
        platform_error.style.display="block";
    }
    if (active_uc.length==0){
        uc_error.style.display="block";
    }

}
}
let ucImage=document.querySelectorAll(".uc .image");
let platformImage=document.querySelectorAll(".platform .image");

ucImage.forEach(el=>{
    el.onclick=function(){
        uc_error.style.display="none";
        ucImage.forEach(el=>{
            el.classList.remove("active");
        })
        this.classList.add("active");
    }
});
platformImage.forEach(el=>{
    el.onclick=function(){
        platform_error.style.display="none"
        platformImage.forEach(el=>{
            el.classList.remove("active");
        });
        this.classList.add("active")
    }
})