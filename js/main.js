$(document).ready(function (){
    $("#gallery").wrapInner("<table cellspacing='20'><tr>");
    $(".post").wrap("<td></td>");
    $("#gallery").fadeIn(1500);
    $("img").on("contextmenu", function(){
        return false;
    });
});
