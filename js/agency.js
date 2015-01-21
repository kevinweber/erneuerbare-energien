/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

	$('body').on('click', '#s11', function() {
		
		$(this).addClass('active-land');
	});

function setActive(elem) {
	$(elem).addClass('active-land');
}

$('#states a').click( function() {
	var fillColor = $(this).find('path').css('fill');
	
	console.log('lel');
	console.log($(this));
	if (fillColor == 'rgb(34, 34, 34)') {
		$('#states').find('path').css('fill', '#A0C884');
		$('#states').find('text').removeAttr('style');
	} else {
		$('#states').find('path').css('fill', '#A0C884');
		$('#states').find('text').removeAttr('style');
		$(this).find('path').css('fill', 'rgb(34, 34, 34)');
		$(this).find('text').css('fill', '#A0C884');
	}
});

