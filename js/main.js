$(document).ready(function (){
    $("#gallery").wrapInner("<table cellspacing='30'><tr>");
    $(".post").wrap("<td></td>");
    $("#gallery").fadeIn(1500);
    $("img").on("contextmenu", function(){
        return false;
    });
    $('#gallery').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta*10);
        e.preventDefault();
    });
});
