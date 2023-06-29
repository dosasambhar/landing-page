var ht = gsap.timeline()

ht.to("#page1",{
    y:"100vh",
    scale:0.3,
    duration:0
})

ht.to("#page1", {
    y:"50vh",
    duration:1,
    delay:1
})

ht.to("#page1",{
    rotate:360,
    scale:1,
    y:"0vh",
    duration:0.7
})