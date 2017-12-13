$(window).on("load", function (){
    $("#gallery").wrapInner("<table cellspacing='20'><tr>");
    $(".post").wrap("<td></td>");
    $("img").on("contextmenu", function(){
        return false;
    });
});
