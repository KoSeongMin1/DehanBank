$(".mainmenu>li").mouseover(function(){
    $(".submenu, .subback").stop().slideDown(400);
});
$(".mainmenu>li").mouseleave(function(){
    $(".submenu, .subback").stop().slideUp(100);
});

setInterval(function(){
    $(".slide").delay("2300");
    $(".slide").animate({marginLeft: "-1200px"},"700");
    $(".slide").delay("2300");
    $(".slide").animate({marginLeft: "-2400px"},"700");
    $(".slide").delay("2300");
    $(".slide").animate({marginLeft: "0px"},"700");
});

$("#noticeBtn").click(function(){
    $("#notice").show();
    $("#noticeBtn").css({color:"#333333"});
    $("#gallery").hide();
    $("#galleryBtn").css({color:"lightgray"});
});
$("#galleryBtn").click(function(){
    $("#gallery").show();
    $("#galleryBtn").css({color:"#333333"});
    $("#notice").hide();
    $("#noticeBtn").css({color:"lightgray"});
});
$("#noticeBtn").focus(function(){
    $("#notice").show();
    $("#noticeBtn").css({color:"#333333"});
    $("#gallery").hide();
    $("#galleryBtn").css({color:"lightgray"});
});
$("#galleryBtn").focus(function(){
    $("#gallery").show();
    $("#galleryBtn").css({color:"#333333"});
    $("#notice").hide();
    $("#noticeBtn").css({color:"lightgray"});
});

$(".onClick").click(function(){
    $("#modal").show();
});
$(".modalbutton").click(function(){
    $("#modal").hide();
});