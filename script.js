var tl = gsap.timeline();

tl.from('.navBar .carta .logo  .serchbar .login .cart .seller',{
    y: -100,
    duration: 1 ,
    delay: 1 ,
    opacity:0,})


tl.from('.menu.ss',{
    y: -100,
    duration:1 ,
    delay:1 ,
    opacity:0,})

    // tl.from('.slide',{
    //     x: 100,
    //     duration:1,
    //     delay:0,
    //     opacity:0,})


// tl.from('.main,.abc',{
//    x: 100,
//    duration:1,
//    delay:1,
//    opacity:0,
//    scrollTrigger:{
//        trigger:'.main .abc',
//        scroller:'body',
//        markers:true,
//        scrub:1,
//        start:"400px 90%",
//        end:"400px 40%,"
// }
// })

// tl.from('.more .xyz',{
//     x: -100,
//     duration:1,
//     delay:1,
//     opacity:0,
//     scrollTrigger:{
//         trigger:'.more .xyz',
//         scroller:'body',
//         markers:true,
//         scrub:1,
//         start:"100px 90%",
//         end:"100px 50%,"
//     }
// })


