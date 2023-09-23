const rect=document.querySelector('#center');

rect.addEventListener('mousemove', function(event){
    const rectLocation=rect.getBoundingClientRect();
    let cursorLocation=event.clientX-rectLocation.left;
    if(cursorLocation<(rectLocation.width/2)){
        let redColor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,cursorLocation);
        gsap.to(rect,{
            color: `rgb(${redColor},0,0)`,
            ease:Power4
        });
        console.log(rectLocation.width/2);    
    }
    if(cursorLocation>(rectLocation.width/2)){
        let blueColor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,cursorLocation);
        gsap.to(rect,{
            backgroundColor:  `0,0,rgb(${blueColor})`,
            ease:Power4
        });
    }
});
rect.addEventListener('mouseleave',function(){
    gsap.to(rect,{
        backgroundColor: 'white'
    });
});

