jQuery(document).ready(function ($) {
    $('#tab-container .tabs a').click(function(e){

        e.preventDefault();

        $('#tab-container .tabs li').removeClass('active');
        $('#tab-container .tab-content > div').hide();
        $($(this).attr('href')).show();
        $(this).parent().addClass('active');

    });
});