const rect=document.querySelector('#center');

rect.addEventListener('mousemove', function(event){
    const rectLocation=rect.getBoundingClientRect();
    let cursorLocation=event.clientX-rectLocation.left;
    if(cursorLocation<rectLocation.width/2){
        console.log('left');
    }else{
        console.log('right');
    }

})
