function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
var changed = 0;
var mobile = detectMob();


function disableAnimations(){
    $("*:not(.preloader)").css({
        "transition-duration": "0s"});
}

function enableAnimations(pl,delay=100){
    setTimeout(function(){
        $("*:not(.preloader)").css({
            "transition-duration": ""});
        

        if (pl){
            $("#preloader > div").css({
                "opacity": "1"});
                
        }
    },delay);
    
}


function nitChangeScreen(wpreloader=false){
    if (mobile){
        if (changed != 1)
        {
            changed += 1;
            disableAnimations()
            document.documentElement.style.fontSize = 16*(window.innerHeight/1080*1.2) + "px";
            enableAnimations(wpreloader)
            
            return 16*(window.innerHeight/1080*1.35);   
        }
        
    }
    else {
        if (window.innerHeight >= 700){
            disableAnimations()
            document.documentElement.style.fontSize = 16*(window.innerHeight/1080*1.75) + "px";
            enableAnimations(wpreloader)
            return 16*(window.innerHeight/1080*1.75);
        }
        else {
            if (window.innerHeight <= 300){
                disableAnimations()
                document.documentElement.style.fontSize = 16*(window.innerHeight/1080*1.75) + "px";
                enableAnimations(wpreloader)
                return 16*(window.innerHeight/1080*1.75);
            }
            else {
                disableAnimations()
                document.documentElement.style.fontSize = "16px";
                enableAnimations(wpreloader)
                return 16;
            }
        }
    }

   
    
}
