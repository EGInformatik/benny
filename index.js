k = 0;

function doSomething() {
    {
        if(k%3==0) {
        $("h1").css("color", "#0088ff");
        k = k + 1;
        console.log(k);
    } else if (k%3==1) {
        $("h1").css("color", "#00ff00");
        k = k + 1;
        console.log(k);
    } else if(k%3==2) {
        $("h1").css("color", "#ff0000");
        k = k + 1;
        console.log(k);
    }
}

}