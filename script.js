function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+'px'
    crsr.style.top = dets.y+"px"

})
// var vdo = document.querySelector("#page video")
// vdo.addEventListener("mouseenter",function(){
//     // crsr.style.width = "23px"
//     crsr.style.width = "8vw"
//     crsr.innerHTML =" Sound On "
// })
// vdo.addEventListener("mouseleave",function(){
//     crsr.style.width ="20px";
//     crsr.innerHTML = " "
// })







var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page h1",
        scroller:"#main",
        start:"top 27%",
        end:"top 0",
        scrub:3,
        // markers:true
    }
})
tl.to("#page h1",{
    x:-100,
    opacity:"0"
},"koibhivar")

tl.to("#page h2",{
    x:110,
    opacity:"0"
},"koibhivar")

//video scrolling e st laganor somoy oi particular div k height dibi na
tl.to("#page video",{
    width:"90%"            
},"koibhivar")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page h1",
        scroller:"#main",
        start:"top -120%",
        end:"top -130%",
        scrub:3
    }
})


tl2.to("#main",{
    backgroundColor:"white",
    
})



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page h1",
        scroller:"#main",
        start:"top -200%",
        end:"top -210%",
        scrub:3,
        // markers:true
    }
})

tl3.to("#main",{
    backgroundColor:"#0F0D0D"
})


