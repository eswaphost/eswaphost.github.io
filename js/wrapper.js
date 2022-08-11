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




function nitChangeScreen(smallerpls = false){
    if (mobile){
        if (changed != 1)
        {
            changed += 1;
            $("*:not(.preloader)").css({
                "transition-duration": "0s"});
            document.documentElement.style.fontSize = 16*(window.innerHeight/1080*1.35) + "px";
            setTimeout(function(){
                $("*:not(.preloader)").css({
                    "transition-duration": ".5s"});
            },100)
            return 16*(window.innerHeight/1080*1.35);   
        }
        
    }
    else {
        if (window.innerHeight >= 700){
        
            document.documentElement.style.fontSize = 16*(window.innerHeight/1080*1.75) + "px";
            return 16*(window.innerHeight/1080*1.75);
        }
        else {
            if (window.innerHeight <= 300){
                document.documentElement.style.fontSize = 16*(window.innerHeight/1080*1.75) + "px";
                return 16*(window.innerHeight/1080*1.75);
            }
            else {
                document.documentElement.style.fontSize = "16px";
                return 16;
            }
        }
    }
    
}