var count = 0,
    countb = 0,
    countc = 0;
var TFP = Math.floor(Math.random() * 5),
    TCC = Math.floor(Math.random() * 5),
    TCK = Math.floor(Math.random() * 5);
var heal = Math.floor(Math.random() * 4),
    hael = Math.floor(Math.random() * 4);
$('#checked').hide();
$('#dialog').hide();
$('#check').hide();
$("#chara").hide();
$("#info").hide();
$("#picked").hide();
$(".stats").hide();
$('.story').hide();
$('#guess').hide();
$('#guessed').hide();
$('#proced').hide();
$('#heal').hide();
$(".start").on('click', function(){
  $("#chara").show('slow');
  $("#info").hide('slow');
  $(".instruct").hide('slow');
  $(".start").hide('slow');
  $("#picked").show('slow');
  $('.stats').show();
});

$(".instruct").on('click', function(){
  $("#info").show('slow');
});

$("#chara").on('change', function(){
    if($('#chara').val() == 1){
        $(".stats").html('stats: 5HP, 4DEF, 3ATT, & 25% chance to evade').css({color:'rgb(202, 177, 35)', backgroundColor:'rgb(87, 19, 150)'});
    }else if($('#chara').val() == 2){
        $('.stats').html('stats: 4HP, 3DEF, 3ATT, & 50% chance to evade').css({color:'rgb(5, 199, 134)', backgroundColor:'rgb(240, 92, 6)'});
    }else{
        $('.stats').html('stats: 2HP, 1DEF, 6ATT, & 75% chance to evade').css({color:'rgb(250, 182, 34', backgroundColor:'rgb(6, 238, 255)'});
    }
});

$('#picked').on('click', function(){
    $('#chara').hide('slow');
    $('.stats').hide('slow');
    $('#guess').show('slow');
    $('#picked').hide()
    $('#proced').show('slow');
    if($('#chara').val() == 1){
        $('#tittle').html('The Corrupted Kingdom').css({color:'rgb(202, 177, 35)'})
        $('body').css({backgroundColor:'rgb(87, 19, 150)'})
        $('#dialog').css({backgroundColor:'darkslategray', color:'rgb(202, 177, 35)'})
    } else if($('#chara').val() == 3){
        $("#tittle").html('The Frozen Palace').css({color:'rgb(250, 182, 34)'})
        $('body').css({backgroundColor:'rgb(6, 238, 255)'})
        $('#dialog').css({backgroundColor:'darkslategray', color:'rgb(250, 182, 34)'})
    }else{
        $('#tittle').html('The Charred Castle').css({color:'rgb(5, 199, 134)'})
        $('body').css({backgroundColor:'rgb(240, 92, 6)'})
        $('h3').css({color:'rgb(5, 199, 134)'})
        $('#dialog').css({backgroundColor:'darkslategray', color:'rgb(5, 199, 134)'})
        $('#checked').css({color:'rgb(5, 199, 134)'})
    }});

$('#guessed').on('click', function(){
    var answer = Math.floor(Math.random() * 3);
        heal = Math.floor(Math.random() * 4);
        hael = Math.floor(Math.random() * 4);
    $('#checked').hide('slow')
    $("#dialog").hide('slow')
    $('#random').hide('slow')
    if(heal == hael){
        $('#random').show('slow')
        $('#random').html('you healed 2HP from a fairy')
    }     
    if($('#guess').val() == answer && $('#chara').val() == 3){
        console.log('meow')
        $('#attack').html('Your attack hit with 6 DAM')
    } else if($('#guess').val() == answer && $('#chara').val() == 2){
        console.log('pow')
        $('#attack').html('Your attack hit with 3 DAM')
       
    } else if($('#guess').val() == answer && $('#chara').val() == 1){
        console.log('ow')
        $('#attack').html('Your attack hit with 2 DAM')
    } else {
        $('#attack').html('Your attack missed')
    }
});
$('#check').on('click', function(){
    $('#checked').show('slow')
    if(TCK == 0 && $('#chara').val() == 2) {
    count = count + 1;
    }
    if((TCK == 0 && $('#chara').val() == 2) && count == 3) {
        $('#dialog').show('slow')
        $('#encounter').html('FLare, The Great Fire Dog')
        $('#dialog').html('Well Good Job On Finding Me, Now You Can Take My Great Bow')
        $('#checked').hide();
        $('#proced').show('slow')
    }
    if(TFP == 0 && $('#chara').val() == 3) {
        $('#checked').html('2HP, 0DEF, & 2ATT');
    } else if(TFP == 1 && $('#chara').val() == 3) {
        $('#checked').html('5HP, 3DEF, & 4ATT');
    } else if(TFP == 2 && $('#chara').val() == 3) {
        $('#checked').html('3HP, 3DEF, & 3ATT');
    } else if(TFP == 3 && $('#chara').val() == 3) {
        $('#checked').html('8HP, 5DEF, & 5ATT');
    } else if(TFP == 4 && $('#chara').val() == 3) {
        $('#checked').html('4HP, 3DEF, & 3ATT');}
    if(TCC == 0 && $('#chara').val() == 1) {
        $('#checked').html('3HP, 2DEF, & 3ATT');
    } else if(TCC == 1 && $('#chara').val() == 1) {
        $('#checked').html('3HP, 2DEF, & 4ATT');
    } else if(TCC == 2 && $('#chara').val() == 1) {
        $('#checked').html('2x5HP, 1DEF, & 2ATT');
    } else if(TCC == 3 && $('#chara').val() == 1) {
        $('#checked').html('7HP, 3DEF, & 4ATT');
    } else if(TCC == 4 && $('#chara').val() == 1) {
        $('#checked').html('5HP, 4DEF, & 2ATT');}  
     if(TCK == 0 && $('#chara').val() == 2) {
        $('#checked').html('...');
    } else if(TCK == 1 && $('#chara').val() == 2) {
        $('#checked').html('4HP, 2DEF, & 4ATT');
    } else if(TCK == 2 && $('#chara').val() == 2) {
        $('#checked').html('6HP, 3DEF, & 5ATT');
    } else if(TCK == 3 && $('#chara').val() == 2) {
        $('#checked').html('4HP, 2DEF, & 4ATT');
    } else if(TCK == 4 && $('#chara').val() == 2) {
        $('#checked').html('7HP, 4DEF, & 6ATT');
}});
$('#proced').on('click', function(){
    $("#check").show('slow');
    $('#guessed').show('slow');
    $('#proced').hide('slow');
    $('#heal').show('slow');
    $('#encounter').css({fontFamily:'lobster'});
    /*if(){

    }else {
        countb = 0 + 1;
    }*/
    
    if(TFP == 0 && $('#chara').val() == 3) {
        $('#encounter').html('Angry Snowman');
    } else if(TFP == 1 && $('#chara').val() == 3) {
        $('#encounter').html('The Frost Hydra');
    } else if(TFP == 2 && $('#chara').val() == 3) {
        $('#encounter').html('The Winter Wolf').css({fontFamily:'lobster two'});
    } else if(TFP == 3 && $('#chara').val() == 3) {
        $('#encounter').html('Sin, The 3rd Ultra Knight');
    } else if(TFP == 4 && $('#chara').val() == 3) {
        $('#encounter').html('The Frozen Knight');
    } else if(countb == 4 && $('#chara').val() == 3) {
        $('#encounter').html(',The Frozen King')
        $('#dialog').html('I Know You Need This Crown , But I Will Not Give It To You Without A Fight ')
    }
    if(TCC == 0 && $('#chara').val() == 1) {
            $('#encounter').html('Corrupted Fox').css({fontFamily:'lobster two'});
    } else if(TCC == 1 && $('#chara').val() == 1) {
            $('#encounter').html('Skeleton Knight');
    } else if(TCC == 2 && $('#chara').val() == 1) {
            $('#encounter').html('A Corrupted Turkey');
    } else if(TCC == 3 && $('#chara').val() == 1) {
            $('#encounter').html('The Skeleton King');
    } else if(TCC == 4 && $('#chara').val() == 1) {
            $('#encounter').html('The Shadow');
    } else if(countb == 4 && $('#chara').val() == 1) {
        $('#encounter').html('The Nameless Chaos Lord')
        $('#dialog').html('ima banana')
    }  
     if(TCK == 0 && $('#chara').val() == 2) {
                $('#encounter').html('strange dog').css({fontFamily:'lobster two'});
                $('#dialog').html('...').show('slow')
    } else if(TCK == 1 && $('#chara').val() == 2) {
                $('#encounter').html('The Charred Knight');
    } else if(TCK == 2 && $('#chara').val() == 2) {
                $('#encounter').html('Meowzer');
    } else if(TCK == 3 && $('#chara').val() == 2) {
                $('#encounter').html('The Burning Monster, Solar');
    } else if(TCK == 4 && $('#chara').val() == 2) {
                $('#encounter').html('Drako, The Great Flame Dragon');
    }  else if(countb == 4 && $('#chara').val() == 2) {
        $('#encounter').html(',The Fire King')
        $('#dialog').html('Well... This Should Be A Fun Challange')
    }         
});
$('#heal').on('click', function(){
    countc = 0 + 1;
    if(countc == 1){
        $('#heal').html('use potion (3)')
} else if(countc == 2){
    $('#heal').html('use potion (2)')
} else if(countc == 3){
    $('#heal').html('use potion (1)') 
} else if(countc == 4){
    $('#heal').html('0 left')
}
});