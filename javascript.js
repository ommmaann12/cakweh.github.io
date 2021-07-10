//menu
var tombolmenu = $(".tombol-menu");
var tmenu = $("nav .tmenu ul");

function klikMenu() {
    tombolmenu.click(function(){
        tmenu.toggle();
    });
    menu.click(function(){
        tmenu.toggle();
    })
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        tmenu.css("display","block");
    }else{
        tmenu.css("display","none");
    }
    klikMenu();
});