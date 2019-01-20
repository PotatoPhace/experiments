$('#error').hide();
$('#flaseButton').hide();
$('.start').hide();
$('#good').hide();
$('#BAD').hide();
$('#why').hide();
$('#ohWell').hide();
     var totalSeconds = 300;
    var wait = window.setTimeout(function() {
        $(".button").hide();
        $("#flaseButton").show();
        $('#hi').text('Ok I am back and now you can push the button as you please');
    },totalSeconds * 1000);

    var currentSeconds = totalSeconds;
    var interval = window.setInterval(function() {
        $("#countdown").text("you have "  + currentSeconds +  " seconds till HE comes back");
        currentSeconds--;
        if(currentSeconds === 0) {
            clearInterval(interval);
            $("#countdown").hide('slow');
        }
    }, 1000);

$(".button").on('click', function(){
    $('#error').show();
    $('h1').hide();
    $("#countdown").hide();
    $('.button').hide('slow');
    clearInterval(interval);
    clearInterval(wait);
    $("#startE").on('click', function(){
        clearTimeout(bye);
        $(".start").hide('fast');
        $('.button').hide('slow');
        $('#good').show('slow');
        $('#BAD').show('slow');
        $('#doIt').text('NOW THE RED!');
        $('#error').text('NO! THE BLUE ONE!;)')
        $('#itBegins').text('THE GAME CONTINUES')
    });
    $("#itBegins").text("welcome, to the BUTTON GAMES");
    var bye = window.setTimeout(function() {
        $("#error").text('I HAVE GOT YOU AND NOW, I AM NOT LEAVING AGAIN');
        $(".start").hide('slow');
        $("#itBegins").hide('slow');
        $('#doIt').hide('slow');
        $('.button').hide('slow');
    }, 10000);
    $("#startE").on('click', function(){
        clearTimeout(bye);
        $(".start").hide('fast');
        $('.button').hide('slow');
        $('#good').show('slow');
        $('#BAD').show('slow');
        $('#doIt').text('NOW THE RED!');
        $('#error').text('NO! THE BLUE ONE!;)')
        $('#itBegins').text('THE GAME CONTINUES')
    });
    $('#startA').show();
    $("#doIt").text("PUSH THE PINK BUTTONS, HURRY!");//JUST DO IT, DON'T LET YOUR DREAMS BE DREAMS
});
$('#flaseButton').on('click', function(){
    $('h4').text('You do something...but it did nothing');
});
$("#startA").on('click', function(){
    $('#startB').show();
});
$("#startB").on('click', function(){
    $('#startC').show();
});
$("#startC").on('click', function(){
    $('#startD').show();
});
$("#startD").on('click', function(){
    $('#startE').show(  );
});
$("#good").on('click', function(){
    
});
$("#BAD").on('click', function(){
    $('#good').hide();
    $('#BAD').hide();
    $('#doIt').hide();
    $('#itBegins').text('wait... WHERE ARE YOU GOING!:(');
    $('#error').text('OH so NOW you listen to me, well now your in MY story and you will play by MY rules.');
    window.setTimeout(function() {
        $("#itBegins").hide('slow');
    }, 5000);
    window.setTimeout(function() {
        $('#error').text('*clears thoat* now, push that button and do not bother waiting(IT WILL DO NOTHING)');
        $('#why').show();
        var wait = window.setTimeout(function() {
            $('h4').text('...well at least that is something :|')
        }, 10000);
    }, 5000);
    $('#why').on('click', function(){
        $('#why').hide();
        $('#ohWell').show();
        $('#error').text('ok after this button, things get good ;)');//100!
        $('h4').hide();
    });
});
