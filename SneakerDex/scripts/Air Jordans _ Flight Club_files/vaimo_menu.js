
//same code as vertnav
jQuery(document).ready(function($) {

    $('.expandlink').click(function(e){

        e.preventDefault();

        var clickedNode = $(e.target);
        var parentLi = clickedNode.closest('li');

        if(parentLi.hasClass('closed')){
            parentLi.removeClass('closed');
            parentLi.addClass('open');
            parentLi.find('ul').show();
        }
        else {
            parentLi.removeClass('open');
            parentLi.addClass('closed');
            parentLi.find('ul').hide();
        }
    });

    $('.vertnavlink span').each(function(){

        var spanWidth = $(this).width();

        $(this).closest('li').find('.expandlink').each(function(){
            $(this).css('left', (spanWidth + 20) + 'px');
            $(this).show();
        });
    });
});