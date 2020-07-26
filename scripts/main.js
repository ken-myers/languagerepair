$(document).ready(function(){
	setMinHeight();
});

$(window).resize(function(){
	setMinHeight();
});

$("#contact-form").submit(function(e){
	onSubmit(e);
});

function setMinHeight(){
	var navHeight = $('#navBar').outerHeight();
    var viewportHeight = $(window).outerHeight();
    var footerHeight = $('#sticky-footer').outerHeight();
    var finalHeight = viewportHeight-(navHeight+footerHeight);
    $('.content').css('min-height',finalHeight);
}

function onSubmit(e){
    //prevent Default functionality
    e.preventDefault();

    //get the action-url of the form
    var actionurl = e.currentTarget.action;

    //do your own request an handle the results
    $.ajax({
        url: actionurl,
        type: 'post',
        dataType: 'application/json',
        data: $("#contact-form").serialize(),
        success: function(data) {
        	$("#contact-form").each(function(){
        		this.reset()
        	})
    	}
    });
}


