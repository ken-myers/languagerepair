
$(document).ready(function(){
	setMinHeight();
});

$('<img/>').attr('src', '../resources/typewriter.jpg').on('load', function() {
   $(this).remove();
   doTyping();
});

$(window).resize(function(){
	setMinHeight();
});

$("#hiddenFrame").on("load", function(){
	console.log("agaba")
	$("#contact-form").each(function(){
       		this.reset()
	});
	$("#submitAlert").fadeIn();
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

function doTyping(){

    function type(string, speed, identifier){
        r = 0;
        function factory(c){
            return function(next) {$(this).append(c);next();};
        }
        for (var i = 0; i < string.length; i++) {
            c = string.charAt(i);
            // does spaces instantly. looks better for some readson
            if(c!=' '){
                $(identifier).delay(speed).queue(factory(c));
                r+=speed;
            }else{
                $(identifier).queue(factory(c));
            }
        }

        return r;
    }

    function backspace(chars, speed, identifier){
        r=0;

        for (var i = 0; i < chars; i++) {
            $(identifier).delay(speed).queue(function(next){
                text = $(this).text();
                newText = text.substring(0,text.length-1);
                $(this).text(newText);
                next();
            });
            r+=speed;
        }

        return r;
    }

    typingSpeed=75;
    mistake = "orem ksp";
    fix  = "ipsum dolor."
    delay=0;
    delay+=type(mistake,typingSpeed,"#typyHeader");
    $("#typyHeader").delay(350);
    delay+=350;
    delay+=backspace(3, 115, "#typyHeader");
    $("#typyHeader").delay(350);
    delay+=350;
    delay+=type(fix,typingSpeed,"#typyHeader");
    $("#typyPara").delay(delay+100);
    $("#typyPara").fadeIn(2300);

}

