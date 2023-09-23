const rect=document.querySelector('#center');

rect.addEventListener('mousemove', function(event){
    const rectLocation=rect.getBoundingClientRect();
    let cursorLocation=event.clientX-rectLocation.left;
    if(cursorLocation<(rectLocation.width/2)){
        let redColor=gsap.utils.mapRange(0,200,250,0,cursorLocation);
        gsap.to(rect,{
            color:  `rgb(${redColor},0,0)`,
            ease:Power4
        });
    }
    if(cursorLocation>(rectLocation.width/2)){
        let blueColor=gsap.utils.mapRange(200,400,0,250,cursorLocation);
        gsap.to(rect,{
            color:  `0,0,rgb(${blueColor})`,
            ease:Power4
        });
    }
});
