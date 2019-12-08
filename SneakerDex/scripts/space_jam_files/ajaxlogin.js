// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

jQuery(document).ready(function($){

	var AjaxLogin = {

		init: function( options ){

			var self = this;

			self.options = $.extend( {}, $.fn.ajaxLogin.options, options );

		    // Close mini login
            $('#close-mini-login-link').unbind('click').bind('click', function (e) {
				$('.header .logged-out').removeClass('active');
				$('.forget').hide();
				$('#mini-login-container').hide();
			});

			// When logged out and click
            $('.header .logged-out').unbind('click').bind('click', function (e) {
				$(this).addClass('active');
				$('#mini-login-container').show();
				return false;
			});

			// Frgt
            $('.frgt').unbind('click').bind('click', function (e) {
                $('.forget').show();
				return false;
			});

			// Login action
             $('.login-btn').unbind('click').bind('click', function (e) {

			 	$('.login-loader').show();

				var jqurl2 = $('#mini-login').attr('action');
			 	var jqparams2 =  $('#mini-login').serialize();

				$.ajax({
					type: "POST",
					url: jqurl2,
					data: jqparams2,
					success: function(responseText){
						if (responseText == "1"){
							if(self.options.redirect_dashboard == '1'){
								window.location = self.options.redirect_url;
							}
		                }else if (responseText == "2"){ //all ok, but stay on page (reload current)
		                    //window.location = window.location;
						}else{
							$('.ajax-response').text(responseText);
							$('.mini-login-inner-container .input-text').addClass('validation-failed');
						}
					},
					error: function(xhr, textStatus, errorThrown){
						$('.ajax-response').text(textStatus);
					},
					complete: function (jqXHR, textStatus){
						$('.login-loader').hide();
					}
				});

				return false;
			});

			// Forget action
            $('.forget-btn').unbind('click').bind('click', function (e) {

				$('.forget-loader').show();

				var jqurl = $('#retrieve_password_form').attr('action');
			 	var jqparams =  $('#retrieve_password_form').serialize();

				$.ajax({
					type: "POST",
					url: jqurl,
					data: jqparams,
					success: function(responseText){

						$('.forget-feedback').show();
						$('.forget-feedback').text('');
						$('.forget-feedback').append(responseText).delay(2000).fadeOut();
						$('#email_address').delay(2000).val('');
						$('.forget-loader').css('display','none');

						if (responseText != "A new password has been sent."){
							$('.forget .input-text').removeClass('validation-passed');
							$('.forget .input-text').addClass('validation-failed');
						}
						else{
							$('.forget .input-text').removeClass('validation-failed');
							$('.forget .input-text').addClass('validation-passed');
						}
					}
				});

				return false;
			});
		}
	}

    $.fn.ajaxLogin = function( options ) {

    	var ajaxLogin = Object.create( AjaxLogin );
    	ajaxLogin.init( options );

    	return this;
	};

	$.fn.ajaxLogin.options = {
	      'redirect_dashboard' : 0,
	      'redirect_url' : ''
	};
});