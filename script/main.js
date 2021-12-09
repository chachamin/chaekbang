$(function(){
    $("#imgs li:gt(0)").hide();
    setInterval(function(){
        $("#imgs li:eq(0)")
        .fadeOut()
        .next()
        .fadeIn()
        .end()
        .appendTo("#imgs");
    },3000);

})