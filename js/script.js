function headerSticky() {
    var siteHeader = $(".nav_full"),
        winPosTop = $(window).scrollTop(),
        offsetVal = 100;
    if ($(window).width() < 767) {
        var offsetVal = 10;
    }
    if (winPosTop > offsetVal) {
        $("body").addClass("nav_sticky");
    } else {
        $("body").removeClass("nav_sticky");
    }
}
headerSticky();
$(window).scroll(function() {
    headerSticky();
});


new WOW().init();