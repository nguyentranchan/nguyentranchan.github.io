function autoType(elementClass, typingSpeed) {
    var thhis = $(elementClass);
    thhis = thhis.find("h1");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("T");
    setTimeout(function() {
        thhis.css("opacity", 1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for (var i = 0; i < amntOfChars; i++) {
            (function(i, char) {
                setTimeout(function() {
                    newString += char;
                    thhis.text(newString);
                }, i * typingSpeed);
            })(i + 1, text[i]);
        }
    }, 100);
}

$(document).ready(function() {

    autoType(".head-title", 50);

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('open');
        $('body, html').toggleClass('overflow');
        $('.txt-menu').toggle();
    });
    // window.addEventListener("resize", function(){
    //   if(window.innerWidth > 959){
    //     $('.txt-menu').css('display', 'block');
    //   } else {
    //     $('.txt-menu').css('display', 'none');
    //     $('.navbar-toggle').removeClass('open');
    //   }
    // });
});

//Paralax Effect

if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        $('.head-title').css({
            'transform': 'translateY(' + wScroll / 20 + '%)'
        });
        $('.g-what').css({
            'transform': 'translateY(-' + wScroll / 40 + 'px)'
        });
        $('.about-wrapp').css({
            'transform': 'translateY(-' + wScroll / 30 + 'px)'
        });
        $('.g-cta').css({
            'transform': 'translateY(-' + wScroll / 40 + 'px)'
        });
        $('.cta-info, .btn-home').css({
            'transform': 'translateY(' + wScroll / 60 + 'px)'
        });
    });
} else {
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        $('.head-title').css({
            'transform': 'translate3d(0px, ' + wScroll / 3 + 'px, 0px)'
        });
        $('.g-what').css({
            'transform': 'translate3d(0px, -' + wScroll / 20 + 'px, 0px)'
        });
        $('.head-bg').css({
            'transform': 'translate3d(0px, -' + wScroll / 15 + 'px, 0px)'
        });
    });
}