$("#s1").click(function(){
    $("#s1").toggle();
    $("#s2").fadeToggle();
    $("#s2b").fadeToggle();
    $("#show").text("Find the destination");
});

$("#s2b").mouseenter(function(){
    $("#s2b").toggle();
    $("#s2").toggle();
    $("#s3").fadeToggle();
    $("#show").text("Click to continue");
});

$("#s3").click(function(){
    $("#s3").toggle();
    $("#s4").fadeToggle();
    $("#a").fadeToggle();
    $("#r").fadeToggle();
    $("#show").text("Click to choose");
});

$("#a").click(function(){
    $("#s4").toggle();
    $("#d").fadeToggle();
    $("#a").toggle();
    $("#r").toggle();
    $("#re").fadeToggle();
    $("#show").text("You've been kill");
});

$("#r").click(function(){
    $("#s4").toggle();
    $("#s5").fadeToggle();
    $("#a").toggle();
    $("#r").toggle();
    $("#re2").fadeToggle();
    $("#show").text("You found the treasure!");
});

$("#re").click(function(){
    $("#re").toggle();
    $("#s1").fadeToggle();
    $("#d").toggle();
    $("#show").text("Click to start the adventure");
});

$("#re2").click(function(){
    $("#re2").toggle();
    $("#s1").fadeToggle();
    $("#s5").toggle();
    $("#show").text("Click the image to start the adventure!");
});

$("#s5").dblclick(function(){
    $("#re3").toggle();
    $("#re2").toggle();
    $("#s5").toggle();
    $("#ee").fadeToggle();
    $("body").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtdawCCpog2B8doaXOl7cNKQ6d-Q2VurbhRLuaoMNeDSCVgHdwQ)");
    $("#show").text("I guess you found the real treasure !");
});

$("#re3").click(function(){
    $("#re3").toggle();
    $("#s1").fadeToggle();
    $("#ee").toggle();
    $("body").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvr9OVQgNGP7-DLiyNBXztVpkbZRnz6Lp27jE5gcX4SwUKHfXPvg)");
    $("#show").text("Click the image to start the adventure!");
});