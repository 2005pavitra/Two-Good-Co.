function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })
    });


    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    });

    document.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x ,
            top: dets.y+350 ,
        });
    })
}
videoconAnimation();

function loadinganimation() {
    gsap.from(".page ", {
        y: 100,
        opacity: 0,
        delay: 0.7,
        duration: 1,
        stagger: 0.2
    })
}
loadinganimation();

// function locomotiveAnimation() {
//     gsap.registerPlugin(ScrollTrigger);

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// }
// locoScroll.on("scroll", ScrollTrigger.update);


