"use strict"
function revealToSpan(){
document.querySelectorAll(".reveal").forEach(function(elem){
    //create two spans
    var parent =document.createElement("span")
    var child =document.createElement("span")
    //parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    //span parent gets child and child gets elem details
    child.innerHTML =elem.innerHTML;
    parent.appendChild(child);

    //elem replaces its value with parent span
    elem.innerHTML="";
    elem.appendChild(parent);
})
}
function valueSetters(){
    gsap.set("#nav a", {y:"-100%",opacity:0});
    gsap.set("#white span .child",{y:"100%"})
    gsap.set("#white .row img",{opacity:0})

    document.querySelectorAll("#Visual>g").forEach(function(e){
        var character = e.childNodes[1].childNodes[1]
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}
//loader Animation
function loaderAnimation(){
    var tl = gsap.timeline();
    tl
    .from("#fs .child span",{
        x:100,
        duration:1.4,
        stagger:.2,
        ease:Power3.easeInOut
    })
    .to(".parent .child",{
        y:"-100%",
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#fs",{
        height:0,
        duration:1,
         ease:Circ.easeInOut
        })
    .to("#green",{
        height:"100%",
        duration:1,
        delay:-.8,
        top:0,
        ease:Circ.easeInOut
    })
    .to("#green",{
        height:"0%",
        duration:1,
        delay:-.5,
        ease:Circ.easeInOut,
        onComplete:function(){
            animateHomepage();
        }
    })
    .to("#white",{
        height:"100%",
        duration:2,
        delay:-1.6,
        ease:Expo.easeInOut})
    
}
//
function animateSvg(){
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut,
    })
}
function animateHomepage(){
    var tl=gsap.timeline()
    tl
    .to("#nav a",{
        y:0,
        stagger:.2,
        opacity:1,
        ease:Expo.easeInOut
    })
    .to("#white .parent .child",{
        y:0,
        stagger:.1,
        duration:2,
        ease:Expo.easeInOut
    })
    .to("#white .row img",{
        ease:Expo.easeInOut,
        opacity:1,
        onComplete:function(){
            animateSvg();
        }
    })
}
function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}


function cardShow(){
document.querySelectorAll(".cnt").forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove",function(dets){
           document.querySelector("#cursor").style.opacity =1;           
           showingImage=dets.target;
        //    document.querySelector("#cursor").style.transfrom =`translate(${dets.clientX}px,${dets.clientY}px)`;
        document.querySelector("#cursor").style.left =(dets.x -420)+ "px"
        document.querySelector("#cursor").style.top=(dets.y-150)+ "px"
           showingImage.style.filter ="grayscale(1)";
           document.querySelector("#work").style.backgroundColor ="#" + dets.target.dataset.color;
 })
 cnt.addEventListener("mouseleave",function(){
    document.querySelector("#cursor").style.opacity =0;
    showingImage.style.filter ="grayscale(0)";
    document.querySelector("#work").style.backgroundColor ="#000";
    // .children[showingImage.dataset.index]
})
    })
}

revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
cardShow();