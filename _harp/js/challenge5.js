var defaulttext = $("#largeId").text();

$(document).ready(function(){
    $(".thumbnail").hover(function(){
        if (!$(".thumbnail").is(":focus")){
            $("#largeId").css("background-image","url('" + $(this).prop('src') + "')");
            $("#largeId").text($(this).prop('alt'));
        }
    }, function(){
        if (!$(".thumbnail").is(":focus")) {
            $("#largeId").css("background-image", "none");
            $("#largeId").text(defaulttext);
        } 
    });
    
    $(".thumbnail").focus(function(){
        $("#largeId").css("background-image","url('" + $(this).prop('src') + "')");
        $("#largeId").text($(this).prop('alt'));
    });

    $(".thumbnail").blur(function(){
        $("#largeId").css("background-image", "none");
        $("#largeId").text(defaulttext);
    });
});













   