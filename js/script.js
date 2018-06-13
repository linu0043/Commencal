$(document).ready(function(){
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,

    });
    $(".carousel").click(function(){
        instance.next();
    });
    setTimeout(autoplay, 5000);   
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 5000);
    }
});
