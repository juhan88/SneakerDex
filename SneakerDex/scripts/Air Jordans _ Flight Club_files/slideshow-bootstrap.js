jQuery(document).ready(function($){
    $('.carousel-nav a').click(function(q){
        q.preventDefault();

        var targetSlide = parseInt($(this).attr('data-to'));

        //Cycles the carousel to a particular slide
        $($(this).attr('href')).carousel(targetSlide);

        //Add active-bullet class to current slide
        $(this).addClass('active-bullet').siblings().removeClass('active-bullet');
    });

    $(".carousel").live("slid", function(obj){
        //Change active bullet on slide
        $(this).find('.carousel-nav').children().eq($(this).find('.active').index()).addClass('active-bullet')
            .siblings().removeClass('active-bullet');
    });
});