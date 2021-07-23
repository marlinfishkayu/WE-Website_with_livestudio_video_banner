// function PageTransition() {

//     var tl = gsap.timeline();

//     tl.to('ul.transition li',{duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.2})
//     tl.to('ul.transition li',{duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.1, delay: .0})
// }

// function contentAnimation(){
//     tl.from('.left', { duration: 1.5, translateY: 50, opacity: 0})
//     tl.to('img', { clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"})
// }

// function delay(n){
//     n = n || 2000;
//     return new Promise(done => {
//         setTimeout(() => {
//             done();

//         }, n);
//     });
// }


// barba.init({

//     sync: true,

//     transitions: [{
//         async leave(data) {
//             const done = this.async();

//             PageTransitionEvent();
//             await delay(1500);
//             done();
//         },

//         async enter(data){
//             contenAnimation();
//         },
//         async once(data){
//             contenAnimation();
//         }
//     }]
// })


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();

        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen",{
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.esaeInOut"
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });
    tl.set(".loading-screen", { left: "-100%" });

}

function contentAnimation(){
    var tl = gsap.timeline();
    tl.fromm(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2});
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },
                async once(data) {
                    contentAnimation();
                }

            },
        ]
    })
})