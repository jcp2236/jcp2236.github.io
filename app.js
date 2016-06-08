var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        if(nextSlide.length == 0) {
            var nextSlide = $('.slide').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if(nextDot.length == 0) {
            var nextDot = $('.dot').first();
        }
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
        
     $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        
        if(prevSlide.length == 0) {
            var prevSlide = $('.slide').last();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if(prevDot.length == 0) {
            var prevDot = $('.dot').last();
        }
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');   
    });
}

var autoSlide = setInterval(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
        
    if(nextSlide.length == 0) {
        var nextSlide = $('.slide').first();
    }
        
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

        
    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();
        
    if(nextDot.length == 0) {
        var nextDot = $('.dot').first();
    }
        
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
}, 4000);

$(document).ready(main);
