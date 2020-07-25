$(document).ready(function(){
	setMinHeight();
});

$(window).resize(function(){
	setMinHeight();
});

function setMinHeight(){
	var navHeight = $('#navBar').outerHeight();
    var viewportHeight = $(window).outerHeight();
    var footerHeight = $('#sticky-footer').outerHeight();
    var finalHeight = viewportHeight-(navHeight+footerHeight);
    $('.content').css('min-height',finalHeight);
}

$('#div-results').on('shown.bs.collapse', function () {
  this.scrollIntoView({behavior: 'smooth'});
});

$('#contact-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSfbs-Lia1qOk5VWpvNWWYFxfugn4OOU8EL9QBsR4pbABbWMxg/formResponse',
        type: 'post',
        data:$('#contact-form').serialize(),
        success:function(){
            // Whatever you want to do after the form is successfully submitted
        }
    });
});