var total = /*99999999999999999999*/0;
var readTotal;
var trueTotal;
var readTotalPower;
var readFinger;
var readVolunteer;
var readCMachine;
var readNuke;
var readMachine;
var readCasino;
var readUpVolunteer;
var readUpCMachine;
var readUpNuke;
var readUpMachine;
var readUpCasino;
 var cost = 15; //cost calculations 
 var fingerInterest = 45;
 var fingerDegree = 15;
 var fingerMultipler = 0;
 var volunteerCost = 2; 
 var theOtherCost = 50;
 var volunteerInterest = 6;
 var volunteerDegree = 4;
 var buyCMachine = 351;
 var upgradeCMachine = 1500;
 var CMachineInterest = 921;
 var CMachineDegree = 512;
 var buyNuke = 4511;
 var upgradeNuke = 10000;
 var bombInterest = 9133;
 var bombDegree = 3533;
 var buyMachine = 77099;
 var upgradeMachine = 570000;
 var machineInterest = 47119;
 var machineDegree = 100765;
 var buyCasino = 7777007;
 var upgradeCasino = 12345678;
 var casinoInterest = 24123426;
 var casinoDegree = 12121212;
 var SACCost = 100000000000;
var power = 1; // cookie power
var masPower = 1;
var powerMultipler = 1.3;
var workForce = 1;
var CMachineForce = 0;
var nukeForce = 0;
var machineForce = 0;
var casinoForce = 0;
var achieveForce = 1;
var SACForce = 1;
var gunForce = 4;
 var sold = 1; //useful things
 var soldCMachine = false;
 var soldNuke = false;
 var soldMachine = false;
 var soldCasino = false;
 var immolate = false;
 var backgroundChange = false;
 var nextText = true;
 var axReady = false;
var golden; //golden cookie 
var freeCookies = 1111;
var goldCount = 0;
  var BANGMODE = false; //bang.png mode
  var bangTotal = 0;
  var batmanFight = false;
  var batmanReady = false;
  var batHP = 250;
 var volunteerSprite = "\\o/"; //sprites and producer amount
 var CMachineSprite = "*{}o";
 var bombSprite = "<()>";
 var machineSprite = "[]j";
 var casinoSprite = "¢πo";
 var volunteerSprite2 = "";
 var CMachineSprite2 = "";
 var bombSprite2 = "";
 var machineSprite2 = "";
 var casinoSprite2 = "";
 var volunteerCount = 0;
 var volunteerForceCount = 0;
 var CMachineCount = 0;
 var nukeCount = 0;
 var machineCount = 0;
 var casinoCount = 0;
 var devotionCount = 0;
 var Continue = 0;
 var totalCookiePower;
var emo = false, //background stuff
    robin = false,
    pink = false,
    Void = false;
var DYDI = 1,//achievements
    ILPMOM = 1,
    HYB = 1, 
    A = 1,
    ISTIL = 1,
    JOF = 1,
    WE = 1,
    SYTO = 1,
    ABAO = 1,
    CT = 0,
    CTCheck = 1,
    P = 1,
    BBC = 1,
    why = 1,
    H = 1,
    N = 1,
    YGFAT = 1,
    WW = 0,
    CR = 1;

/*
goldCount = 2;
HYB = 2;
sold = 2;
volunteerCount = 28;
CMachineCount = 69;
machineCount = 28;
casinoCount = 19;
nukeCount = 15; 
CT = 1500; 
total = 1000000000000;
power = 1000;
batmanReady = true;
devotionCount = 50;
emo = true; 
robin = true;
pink = true;
Void = true;
*/

$("#lol").click(function() {
  $("body").toggle(
  function(){$("body").css({"background-color": "red"});
  });
});

$("#gun").hide();
$(".clack").hide();
$("#golden").hide();
$("#achievements").hide();
$("#backgroundChoice").hide();
$("#fakePngRobin").hide();
$("#fakePngBatman").hide();
$("#bangPng").hide();
$("#axhel").hide();

setInterval(function() {
  golden = Math.floor(Math.random() * 50);
  if(golden === 27) {
    var position1 = Math.floor(Math.random() * 1000);
    var position2 = Math.floor(Math.random() * 350);
    $("#golden").show();
    $("#golden").css({'left': (position1+'px'), 'bottom': (position2+'px')})
    setTimeout(function() {
      $("#golden").hide();
    }, 27000);
  }
}, 1000);

function easyRead(value, length, oValue, HTMLArea, text, postText) {
  if(length >= 7) {
    value = Math.round((oValue/1000000), 1);
   $("#"+HTMLArea).html(text +value+ " million cookies"+postText);
  }
  if(length >= 10) {
    value = Math.round((oValue/1000000000), 1);
   $("#"+HTMLArea).html(text+value+ " billion cookies"+postText);
  }
  if(length >= 13) {
    value = Math.round((oValue/1000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " trillion cookies"+postText);
  }
  if(length >= 16) {
    value = Math.round((oValue/1000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " quadrillion cookies"+postText);
  }
  if(length >= 19) {
    value = Math.round((oValue/1000000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " quintillion cookies"+postText);
  }
  if(oValue >= 1000000000000000000000) {
    value = Math.round((oValue/1000000000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " sextillion cookies"+postText);
  }
  if(oValue >= 1000000000000000000000000) {
    value = Math.round((oValue/1000000000000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " septillion cookies"+postText);
  }
  if(oValue >= 1000000000000000000000000000) {
    value = Math.round((oValue/1000000000000000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " octillion cookies"+postText);
  }
  if(oValue >= 1000000000000000000000000000000) {
    value = Math.round((oValue/1000000000000000000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " nonillion cookies"+postText);
  }
  if(oValue >= 1000000000000000000000000000000000) {
    value = Math.round((oValue/1000000000000000000000000000000000), 1);
   $("#"+HTMLArea).html(text+value+ " decillion cookies"+postText);
  }

}

function muchUsed() {
  //console.log(achieveForce);
  //console.log(workForce*achieveForce)  
  //console.log(total)
  var powerx = (power*achieveForce*SACForce);
  var trueTotalCookiePower;
  var trueFinger;
  var trueVolunteer;
  var trueCMachine;
  var trueNuke;
  var trueMachine;
  var trueCasino;
  var trueUpVolunteer;
  var trueUpCMachine;
  var trueUpNuke;
  var trueUpMachine;
  var trueUpCasino;
 if(BANGMODE === false) {
  powerx = Math.round(powerx);
  totalCookiePower = (((volunteerForceCount*workForce)+(nukeCount*nukeForce*2)+(machineCount*machineForce*4)+(CMachineCount*CMachineForce*8)+(casinoCount*casinoForce*2))*achieveForce*SACForce);
  total = Math.round(total);
  totalCookiePower = Math.round(totalCookiePower);
  readTotal = total.toString().length;
  readTotalPower = totalCookiePower.toString().length;
  readVolunteer = volunteerCost.toString().length;
  readCMachine = buyCMachine.toString().length;
  readNuke = buyNuke.toString().length;
  readMachine = buyMachine.toString().length;
  readCasino = buyCasino.toString().length;
  readFinger = cost.toString().length;
  readUpVolunteer = theOtherCost.toString().length;
  readUpCMachine = upgradeCMachine.toString().length;
  readUpNuke = upgradeNuke.toString().length;
  readUpMachine = upgradeMachine.toString().length;
  readUpCasino = upgradeCasino.toString().length;
   $("#clickCount").html("you have clicked "+CT+" times");
   $("#total").html("you have " +total+ " cookies");
   $("#stats").html("you get "+powerx+" cookie per click and "+totalCookiePower+" per second");
  easyRead(trueTotal, readTotal, total, "total", "you have ", "");
  easyRead(trueTotalCookiePower, readTotalPower, totalCookiePower, "stats","you get "+powerx+" cookie per click and ", " per second");
  easyRead(trueVolunteer, readVolunteer, volunteerCost, "slave", "buy a local manditory volunteer for ", "");
  easyRead(trueCMachine, readCMachine, buyCMachine, "CMachine","buy a cookie conversion machine for ", "");
  easyRead(trueNuke, readNuke, buyNuke, "nuke", "buy a cookie nuke for ", "");
  easyRead(trueMachine, readMachine, buyMachine, "machine","buy a cookie weather machine for ", "");
  easyRead(trueCasino, readCasino, buyCasino, "casino", "buy a cookie branded casino for ", "");
  easyRead(trueFinger, readFinger, cost, "upgrade", "grow more fingers for ", "");
  easyRead(trueUpVolunteer, readUpVolunteer, theOtherCost, "betterSlaveWork", "get more whips to encourage your volunteers for ", "");
  easyRead(trueUpCMachine, readUpCMachine, upgradeCMachine, "grow","grow more beans to be turned into cookies for ", "");
  easyRead(trueUpNuke, readUpNuke, upgradeNuke, "radioactive", "get more radiation for your cookies for ", "");
  easyRead(trueUpMachine, readUpMachine, upgradeMachine, "airCookies","add more cookies into the atmosphere for ", "");
  easyRead(trueUpCasino, readUpCasino, upgradeCasino, "cheat", "buy extra decks to cheat for more money for ", "");
  if(totalCookiePower >= 1000000000) {
    Void = true;
  }
      console.log(fingerInterest, fingerMultipler, powerMultipler, masPower);
 }
}

function spaceSaver() {
    if($('#backgroundChoice').val() == 1){
      $("body").css({'background': '#fa5', 'color': 'black'}).removeClass('void');
      $("#backgroundChoice").css({color:'rgb(0, 0, 0)', background:'#fa7'}).removeClass('void');
      $("#fakePngRobin").hide();
      $("#backgroundExplain").html("");
    }else if($('#backgroundChoice').val() == 2 && emo === true){
      $('#backgroundChoice').css({color:'rgb(255, 255, 255)', background:'rgb(0, 0, 0)'}).removeClass('void');
      $("body").css({'background': '#000', 'color': 'white'}).removeClass('void');
      $("#fakePngRobin").hide();
      $("#backgroundExplain").html("");
    }else if($('#backgroundChoice').val() == 3 && robin === true){
      $("#fakePngRobin").show();
      $("body").css({'background': 'white', 'color': 'orange'}).removeClass('void');
      $("#backgroundExplain").html("");
    }else if($('#backgroundChoice').val() == 4 && pink === true){
      $('#backgroundChoice').css({color:'#d4d', background:'#e19'}).removeClass('void');
      $("body").css({'background': 'radial-gradient(circle, rgba(59,3,3,1) 0%, rgba(98,57,42,1) 60%, rgba(230,75,41,1) 93%, rgba(246,91,57,1) 100%)', 'color': '#d4d'}).removeClass('void');
      $("#fakePngRobin").hide();
      $("#backgroundExplain").html("");
    }else if($('#backgroundChoice').val() == 5 && Void === true){
      $('#backgroundChoice').addClass('void').css('color', 'white');
      $("body").addClass('void').css('color', 'white');
      $("#fakePngRobin").hide();
      $("#backgroundExplain").html("");
    }
    if($('#backgroundChoice').val() == 2 && emo === false){
      $("#backgroundExplain").html("Shoot the gun");
    }else if($('#backgroundChoice').val() == 3 && robin === false){
      $("#backgroundExplain").html("Beat fake png batman");
    }else if($('#backgroundChoice').val() == 4 && pink === false){
      $("#backgroundExplain").html("Unlock Hecatomb");
    }else if($('#backgroundChoice').val() == 5 && Void === false){
      $("#backgroundExplain").html("Make 1 billion cookies per second");
    }
}
 
$(".click").click(function() {
  total+=power*achieveForce*SACForce;
  CT++;
  if(BANGMODE === true) {
    bangTotal++;
    $("#total").html("you have " +bangTotal+ " bang cookies");
  }
  $("#lol").hide();
  muchUsed();
}); 

$("#upgrade").click(function() {
  CT++;
  if(total >= cost) {
    fingerMultipler++;
    total -= cost;
    power += masPower;
    masPower *= powerMultipler;
    if(cost <= fingerInterest) {
      cost += fingerDegree;
    } else if(cost >= fingerInterest) {
      cost += fingerDegree;
      fingerDegree += fingerInterest;
      fingerInterest *= 2;
    }
    if(fingerMultipler <= 4) {
      powerMultipler += 0.1;
    }
    muchUsed();
     $("#upgrade").html("grow more fingers for "+cost+" cookies");
  }
});

$("#slave").click(function() {
   CT++;
  if(total >= volunteerCost) {
    total -= volunteerCost; 
    if(volunteerCost >= volunteerInterest) {
      volunteerCost += volunteerDegree;
      volunteerDegree += volunteerInterest;
      volunteerInterest *= 2;
    } else if(volunteerCost <= volunteerInterest) {
      volunteerCost += volunteerDegree;
    }
    volunteerCount++;
    volunteerForceCount++;
    volunteerSprite2 += volunteerSprite;
     $("#workers").html("you have "+volunteerCount+" volunteers");
     $("#workerCount").html(volunteerSprite2);
     $("#slave").html("buy a local manditory volunteer for "+volunteerCost+" cookies");
    muchUsed();
    setInterval(function() {
      total += (workForce*achieveForce*SACForce);
      muchUsed();
    }, 1000)
  }
});

$("#betterSlaveWork").click(function() {
  CT++;
  if(total >= theOtherCost) {
    total -= theOtherCost;
    workForce*=2;
    theOtherCost *= 3;
    theOtherCost -= 10;
     $("#betterSlaveWork").html("get more whips to encourage your volunteers for "+theOtherCost+" cookies")
    muchUsed();
  }
});

$("#buyGun").click(function() {
  CT++;
  if(total >= 69420 && HYB === 1) {
    total -= 69420;
    HYB = 2;
    SACForce += 0.1;
     $("#buyGun").html("HELL YEAH BROTHER");
     $("#gun").show();
  }
})

$("#amigo").click(function() {
  CT++;
  if(total >= 270000 && sold === 1) {
    total -= 270000;
    power += 270;
    sold = 2;
     $(".clack").show();
     $("#amigo").html("Gracias amigo.");
    muchUsed();
  }
});

$("#golden").click(function() {
  CT++;
  goldCount++;
  if((totalCookiePower*achieveForce*SACForce) >= freeCookies) {
    freeCookies *= 10;
    freeCookies += 1;
  }
  total += (freeCookies*achieveForce*SACForce);
   $("#golden").hide();
  muchUsed();
});

$("#gun").click(function() {
  CT++;
  power+=gunForce;
  total += (power*gunForce*achieveForce*SACForce);
  muchUsed();
  emo = true;
   $("#bullet").addClass("bang");
  setTimeout(function(){
    $("#bullet").removeClass("bang");
  }, 500);
  if(BANGMODE === true) {
    bangTotal+=2;
    $("#total").html("you have " +bangTotal+ " bang cookies");
  }
});

$("#nuke").click(function(){
  CT++;
  if(total >= buyNuke) {
    if(soldNuke === false) {
      soldNuke = true;
      nukeForce = 30;
    }
    total -= buyNuke;
    if(buyNuke >= bombInterest) {
      buyNuke += bombDegree;
      bombDegree += bombInterest;
      bombInterest *= 2;
    } else if(buyNuke <= bombInterest) {
      buyNuke += bombDegree;
    }
    nukeCount++;
    bombSprite2 += bombSprite;
     $("#bombCount").html(bombSprite2);
     $("#bombs").html("you have "+nukeCount+" cookie nukes");
     $("#nuke").html("buy a cookie nuke for "+buyNuke+" cookies");
    muchUsed();
    setInterval(function() {
      total += (nukeForce*achieveForce*SACForce);
      muchUsed();
    }, 500)
  }
});

$("#radioactive").click(function(){
  CT++;
  if(total >= upgradeNuke) {
    total -= upgradeNuke;
    nukeForce *= 2;
    upgradeNuke *= 3;
    upgradeNuke -= 1000;
     $("#radioactive").html("get more radiation for your cookies for "+upgradeNuke+" cookies")
    muchUsed();
  }
});

$("#machine").click(function() {
  CT++;
  if(total >= buyMachine) {
    total -= buyMachine; 
    if(soldMachine === false) {
      soldMachine = true;
      machineForce = 4808;
    }
    if(buyMachine >= machineInterest) {
      buyMachine += machineDegree;
      machineDegree += machineInterest;
      machineInterest *= 2;
    } else if(buyMachine <= machineInterest) {
      buyMachine += machineDegree;
    }
    machineCount++;
    machineSprite2 += machineSprite;
     $("#machines").html("you have "+machineCount+" cookie weather machines");
     $("#machineCount").html(machineSprite2);
     $("#machine").html("buy a cookie weather machine for "+buyMachine+" cookies");
    muchUsed();
    setInterval(function() {
      total += (machineForce*achieveForce*SACForce);
      muchUsed();
    }, 250);
  }
});

$("#airCookies").click(function() {
  CT++;
  if(total >= upgradeMachine) {
    total -= upgradeMachine;
    machineForce*=2;
    upgradeMachine *= 3;
     $("#airCookies").html("add more cookies into the atmosphere for "+upgradeMachine+" cookies")
    muchUsed();
  }
});

$("#CMachine").click(function() {
  CT++;
  if(total >= buyCMachine) {
    total -= buyCMachine; 
    if(soldCMachine === false) {
      soldCMachine = true;
      CMachineForce = 1;
    }
    if(buyCMachine >= CMachineInterest) {
      buyCMachine += CMachineDegree;
      CMachineDegree += CMachineInterest;
      CMachineInterest *= 2;
    } else if(buyCMachine <= CMachineInterest) {
      buyCMachine += CMachineDegree;
    }
    CMachineCount++;
    CMachineSprite2 += CMachineSprite;
     $("#CMachines").html("you have "+CMachineCount+" cookie conversion machines");
     $("#CMachineCount").html(CMachineSprite2);
     $("#CMachine").html("buy a cookie conversion machine for "+buyCMachine+" cookies");
    muchUsed();
    setInterval(function() {
      total += (CMachineForce*achieveForce*SACForce);
      muchUsed();
    }, 125);
  }
});

$("#grow").click(function() {
  CT++;
  if(total >= upgradeCMachine) {
    total -= upgradeCMachine;
    CMachineForce*=2;
    upgradeCMachine *= 3;
     $("#grow").html("grow more beans to be turned into cookies for "+upgradeCMachine+" cookies")
    muchUsed();
  }
}); 

$("#casino").click(function() {
  CT++;
  if(total >= buyCasino) {
    total -= buyCasino; 
    if(soldCasino === false) {
      soldCasino = true;
      casinoForce = 54545;
    }
    if(buyCasino >= casinoInterest) {
      buyCasino += casinoDegree;
      casinoDegree += casinoInterest;
      casinoInterest *= 2;
    } else if(buyCasino <= casinoInterest) {
      buyCasino += casinoDegree;
    }
    casinoCount++;
    casinoSprite2 += casinoSprite;
     $("#casinos").html("you have "+casinoCount+" cookie branded casinos");
     $("#casinoCount").html(casinoSprite2);
     $("#casino").html("buy a cookie branded casino for "+buyCasino+" cookies");
    muchUsed();
    setInterval(function() {
      total += (casinoForce*achieveForce*SACForce);
      muchUsed();
    }, 500);
  }
});

$("#cheat").click(function() {
  CT++;
  if(total >= upgradeCasino) {
    total -= upgradeCasino;
    casinoForce*=2;
    upgradeCasino *= 3;
     $("#cheat").html("buy extra decks to cheat for more money "+upgradeCasino+" cookies")
    muchUsed();
  }
}); 

$("#SAC").click(function() {
  CT++;
  if(total >= SACCost && volunteerCount > 0) {
    var spriteCount = 0;
    total -= SACCost;
    SACCost += 100000000000;
    SACForce += 0.1;
    devotionCount++;
    volunteerCount--;
    volunteerSprite2 = "";
    while(spriteCount !== volunteerCount){
      spriteCount++;
      volunteerSprite2 += volunteerSprite;
    }
   $("#backgroundSAC").addClass("SAC");
  setTimeout(function(){
    $("#backgroundSAC").removeClass("SAC");
  }, 500);
    $("#devotionCount").html("your devotion is rank "+devotionCount);
    $("#SAC").html("Offer a mandatory volunteer and "+SACCost+" cookies to the blood god and progress your devotion");
    $("#workerCount").html(volunteerSprite2);
    $("#workers").html("you have "+volunteerCount+" volunteers");
    muchUsed();
  }
  if(devotionCount >= 100 && axReady == false) {
    axReady = true;
    $("#devotionCount").html("your devotion rank is pleasing");
    $("#SAC").html("enter the void").css("background-color", "#2c0746");
  }
});

$("#bangPNG").click(function() {
  BANGMODE = true;
   $("#bangPng").show();
   $("#CLICK").html("HELL");
   $("#bangPNG").html("Now click to 10k fool");
  if(batmanReady === true) {
    $("#fakePngBatman").show();
  }
  if(BANGMODE === true && bangTotal >= 10000) {
    bangTotal-=1000000;
    BANGMODE = false;
    batmanReady = true;
    gunForce += 100;
    power *= 5;
    $("#bangPng").hide();
    $("#CLICK").html("C L I C K");
    $("#bangPNG").html("You have angered Fake PNG BATMAN, Challenge?");
  }
  if(batmanReady === true && BANGMODE === true) {
    $("#CLICK").html("B A T");
    $("#bangPNG").html("Prepare For Death");
    $("#bangPng").hide();
    $("#producers").show();
    $("#thisIsWhereTheFunBegins").show();
    setTimeout(function(){
      $("#bangPNG").hide();
    }, 3500);
  }
});

$("#fakePngBatman").click(function() {
    var batX = Math.floor(Math.random()*500)+100;
    var batY = Math.floor(Math.random()*250)+100;
    var dialogue = Math.floor(Math.random()*20);
    batHP--;
    $("#total").html("FAKE PNG BATMAN has " +batHP+ " health left");
    if(dialogue == 1) {
      $("#stats").html("I am the one who is very visible in the night");
    }
    if(dialogue == 2) {
      $("#stats").html("I'll never let you see Fake PNG Robert");
    }
    if(dialogue == 3) {
      $("#stats").html("You'll have to click for another thousand years");
    }
    if(dialogue == 4) {
      $("#stats").html("*Intense Brooding*");
    }
    if(dialogue == 5) {
      $("#stats").html("Orange");
    }
    if(dialogue == 6) {
      $("#stats").html("I do actually use guns");
    }
    if(dialogue == 7) {
      $("#stats").html("Are you getting annoyed yet?");
    }
    if(dialogue == 8) {
      $("#stats").html("Is that finger of yours hurting?");
    }
    if(dialogue == 9) {
      $("#stats").html("I may be short, but fuck you");
    }
    if(batHP <= 0){
      robin = true;
      BANGMODE = false;
      $("#CLICK").html("C L I C K");
      $("#producers").show();
      $("#thisIsWhereTheFunBegins").show();
      $("#bangPNG").hide("slow");
      $("#fakePngBatman").hide("slow");
    }
    $("#fakePngBatman").css({'left': batX+'px', 'bottom': batY+'px'})
});

$("#background").click(function() {
  $("#everything").toggle();
  $("#settings").toggle();
  $("#backgroundChoice").toggle();
  $("#bangPNG").toggle();
  $("#lol").hide();
  if(devotionCount >= 0 && $("#backgroundChoice").val() == 5 && axReady == true) {
    $("#everything").hide();
    $("#settings").hide();
    $("#backgroundChoice").hide();
    $("#bangPNG").hide();
    $("#background").hide();
    $("body").css({"background": "radial-gradient(circle, #111 0%, #1c0736 35%, #1c0736 100%)", "color": "#dfd4d1"});
    $("#axhel").show();
    $(".eye").addClass("eyes");
    $("#CLICK").html("The True Void").css({"text-shadow": "1px 1px 2px white, 0 0 25px white, 0 0 5px white"})
    $("#backgroundExplain").html("").css({"text-shadow": "1px 1px 2px white, 0 0 25px white, 0 0 5px white"})
    ww = 1;
  }
});

$("#backgroundChoice").on('change', function(){
  spaceSaver();
});

$("#settings").click(function() { // these are the achievements
  var s1, s2, s3;
  s1 = Math.floor(Math.random()*80)+10;
  s2 = Math.floor(Math.random()*75)+15;
  s3 = Math.floor(Math.random()*77)+13;
  s1 = s1.toString();
  s2 = s2.toString();
  s3 = s3.toString();
  var color = s1+s2+s3;
  backgroundChange = !backgroundChange;
   $("#more").hide();
   $("#background").toggle();
   $("#everything").toggle();
   $("#achievements").toggle();
   $("#lol").hide();
  if(backgroundChange === true){
   $("body").css({'background': '#640'}).removeClass('void');
   $("#fakePngRobin").hide();
  } else if(backgroundChange == false) {
    spaceSaver();
  }  
  if(CT >= 1) {
    DYDI++;
    $("#DYDI").css({'color':'white', 'font-size':'20px'});
  }
  if(goldCount >= 1) {
    ILPMOM++;
    $("#ILPMOM").css({'color':'#939', 'font-size':'20px'});
    if(ILPMOM == 2) {
      achieveForce += 0.1;
    }
  }
  if(HYB === 2) {
    HYB++
    $("#HYB").css({'color':'red', 'font-size':'20px'});
    if(HYB == 3) {
      achieveForce += 0.2;
    }
  }
  if(sold === 2) {
    A++;
    $("#A").css({'color':'orange', 'font-size':'20px'});
    if(A == 3) {
      achieveForce += 0.2;
    }
  }
  if(volunteerCount >= 28) {
    ISTIL++;
    $("#ISTIL").css({'color':'green', 'font-size':'20px'});
    if(ISTIL == 2) {
      achieveForce += 0.2;
    }
  }
  if(CMachineCount >= 15) {
    JOF++;
    $("#JOF").css({'color':'#986', 'font-size':'20px'});
    if(JOF == 2) {
      achieveForce += 0.2;
    }
  }
  if(nukeCount >= 15) {
    WE++;
    $("#WE").css({'color':'black', 'font-size':'20px'});
    if(WE == 2) {
      achieveForce += 0.2;
    }
  } 
  if(machineCount >= 28) {
    SYTO++;
    $("#SYTO").css({'color':'pink', 'font-size':'20px'});
    if(SYTO == 2) {
      achieveForce += 0.4;
    }
  }
  if(casinoCount >= 18) {
    ABAO++;
    $("#ABAO").css({'color':'#ff4', 'font-size':'20px'});
    if(ABAO == 2) {
      achieveForce += 0.3;
    }
  }
  if(CT >= 1500) {
    CTCheck++;
    $("#CT").css({'color':'#EACB53', 'font-size':'20px'});
    if(CTCheck == 2) {
      achieveForce += 0.4;
    }
  }
  if(power >= 1000) {
    P++;
    $("#P").css({'color':'blue', 'font-size':'20px'});
    if(P == 2) {
      achieveForce += 0.2;
    }
  }
  if(emo === true && robin === true && pink === true && Void === true) {
    BBC++;
    $("#BBC").css({'color':'#373', 'font-size':'20px'});
    if(BBC == 2) {
      achieveForce += 0.4;
    }
  }
  if(total >= 1000000000000) {
    YGFAT++;
    $("#YGFAT").css({'color':'#3AD434', 'font-size':'20px'});
    if(YGFAT == 2) {
      achieveForce += 0.4;
    }
  }
  if(HYB >= 2 && sold >= 2 && ISTIL >= 2 && nukeCount >= 15 && CT >= 1500 && power >= 1000 && machineCount >= 28 && casinoCount >= 18 && CMachineCount >= 15 && YGFAT >= 2) {
    why++;
    $("#why").css({'color':'white', 'font-size':'20px'});
    $("#more").show();
    if(why == 2) {
      achieveForce += 0.6;
    }
  }
  if(volunteerCount >= 69 || CMachineCount >= 69 || nukeCount >= 69 || machineCount >= 69 || casinoCount >= 69) {
    N++;
    $("#N").css({'color':'#C76D67', 'font-size':'20px'});
    if(N == 2) {
      achieveForce += 0.69;
    }
  } 
  if(volunteerCount <= 0 && devotionCount >= 50) {
    H++;
    $("#H").css({'color':'#d69', 'font-size':'20px'});
    pink = true;
    if(H == 2) {
      achieveForce += 0.9;
    }
  }
  if(batmanReady == true) {
    BM++;
    $("#BM").css({'color':'#d94', 'font-size':'20px'});
    if(BM == 2) {
      achieveForce += 1.0;
    }
  }
  if(WW >= 1 && BM >= 2 && H >= 2 && N >= 2) {
    CR++;
    $("#CR").css({'color':'#'+color, 'font-size':'20px'});
    if(CR == 2) {
      achieveForce += 2.0;
    }
  if(WW >= 1) {
    WW++;
    $("#WW").css({'color':'#2c0746', 'font-size':'20px'});
    if(WW == 2) {
      achieveForce += 0.4;
    }
  }
  }
});

$("#DYDI").hover(function(){
   $("#DYDI").html("click the cookie, start the end");
   $("#DYDI").css('border', '1px black solid');
  }, function(){
    $("#DYDI").html("Did you do it?");
    $("#DYDI").css('border-color', 'transparent');
});
$("#ILPMOM").hover(function(){
   $("#ILPMOM").html("click on your first golden Cookie");
   $("#ILPMOM").css('border', '1px black solid');
  }, function(){
    $("#ILPMOM").html("It's Like Printing My Own Money");
    $("#ILPMOM").css('border-color', 'transparent');
});
$("#HYB").hover(function(){
   $("#HYB").html("buy the G U N");
   $("#HYB").css('border', '1px black solid');
  }, function(){
    $("#HYB").html("HELL YEAH BROTHER");
    $("#HYB").css('border-color', 'transparent');
});
$("#A").hover(function(){
   $("#A").html("buy the Galleta Grande");
   $("#A").css('border', '1px black solid');
  }, function(){
    $("#A").html("Amigbro");
    $("#A").css('border-color', 'transparent');
});
$("#ISTIL").hover(function(){
   $("#ISTIL").html("get 28 mandatory volunteers");
   $("#ISTIL").css('border', '1px black solid');
  }, function(){
    $("#ISTIL").html("I swear this is legal");
    $("#ISTIL").css('border-color', 'transparent');
});
$("#SYTO").hover(function(){
   $("#SYTO").html("get 28 cookie weather machines");
   $("#SYTO").css('border', '1px black solid');
 }, function(){
    $("#SYTO").html("Stick your tongue out");
    $("#SYTO").css('border-color', 'transparent');
});
$("#JOF").hover(function(){
   $("#JOF").html("get 15 cookie conversion machines");
   $("#JOF").css('border', '1px black solid');
 }, function(){
    $("#JOF").html("Just One Food");
    $("#JOF").css('border-color', 'transparent');
});
$("#WE").hover(function(){
   $("#WE").html("get 15 cookie nukes");
   $("#WE").css('border', '1px black solid');
  }, function(){
    $("#WE").html("What environment?");
    $("#WE").css('border-color', 'transparent');
});
$("#ABAO").hover(function(){
   $("#ABAO").html("get 21 casinos");
   $("#ABAO").css('border', '1px black solid');
 }, function(){
    $("#ABAO").html("All Bets Are Off");
    $("#ABAO").css('border-color', 'transparent');
});
$("#CT").hover(function(){
   $("#CT").html("click 1500 times");
   $("#CT").css('border', '1px black solid');
  }, function(){
    $("#CT").html("Carpal tunnel");
    $("#CT").css('border-color', 'transparent');
});
$("#P").hover(function(){
   $("#P").html("get 1000 clicking power");
   $("#P").css('border', '1px black solid');
  }, function(){
    $("#P").html("Morbid Polydactyly");
    $("#P").css('border-color', 'transparent');
});
$("#BBC").hover(function(){
   $("#BBC").html("obtain all of the backgrounds");
   $("#BBC").css('border', '1px black solid');
  }, function(){
    $("#BBC").html("Best Background Collector");
    $("#BBC").css('border-color', 'transparent');
});
$("#why").hover(function(){
   $("#why").html("What is there left to do, ...oh?");
   $("#why").css('border', '1px black solid');
  }, function(){
    $("#why").html("What did it cost?");
    $("#why").css('border-color', 'transparent');
});
$("#H").hover(function(){
   $("#H").html("kill all of your mandatory volunteers and have at least rank 50 devotion");
   $("#H").css('border', '1px black solid');
 }, function(){
    $("#H").html("Hecatomb");
    $("#H").css('border-color', 'transparent');
});
$("#N").hover(function(){
   $("#N").html("get at least 69 of one cookie producer");
   $("#N").css('border', '1px black solid');
  }, function(){
    $("#N").html("Nice");
    $("#N").css('border-color', 'transparent');
});
$("#YGFAT").hover(function(){
   $("#YGFAT").html("have 1 trillion total cookies");
   $("#YGFAT").css('border', '1px black solid');
  }, function(){
    $("#YGFAT").html("You Gonna Finish All That");
    $("#YGFAT").css('border-color', 'transparent');
});
$("#BM").hover(function(){
   $("#BM").html("beat BANG.PNG Mode");
   $("#BM").css('border', '1px black solid');
  }, function(){
    $("#BM").html("BANG.PNG MODE");
    $("#BM").css('border-color', 'transparent');
});
$("#WW").hover(function(){
   $("#WW").html("Why is the void black ...oh, are you pleased with the 100 volunteers?");
   $("#WW").css('border', '1px black solid');
  }, function(){
    $("#WW").html("Wait What?");
    $("#WW").css('border-color', 'transparent');
});
$("#CR").hover(function(){
   $("#CR").html("Are we done yet?");
   $("#CR").css('border', '1px black solid');
  }, function(){
    $("#CR").html("Car Ride");
    $("#CR").css('border-color', 'transparent');
});

$("#axhel").click(function() {
  if(nextText === true){
    nextText = false;
    Continue += 1;
    if(Continue == 1) {
      $("#backgroundExplain").html("Hmm?");
    }
    if(Continue == 2) {
      $("#backgroundExplain").html("Why have you brought me here?");
    }
    if(Continue == 3) {
      $("#backgroundExplain").html("Curious, what is this place?");
    }
    if(Continue == 4) {
      $("#backgroundExplain").html("Some strange cookie clicking game? Who would find that enjoyable?");
    }
    if(Continue == 5) {
      $("#backgroundExplain").html("Well if you haven\'t any ambition, I\'ll be taking my leave.");
    }
    if(Continue == 6) {
      $("#backgroundExplain").html("Hmm, you may refer to me as Axhel. I am no god, however many see me as a holy figure.");
    }
    if(Continue == 7) {
      $("#backgroundExplain").html("Actually, you seem to be quite the intriguing specimen, most never live after witnessing me.");
    }
    if(Continue == 8) {
      $("#backgroundExplain").html("I\'ll be watching over you from now on.");
    }
    if(Continue == 9) {
      $("#backgroundExplain").html("Until we cross again, I bid you adieu.");
    }
    if(Continue >= 10) {
      axReady = "orange";
      $("#backgroundExplain").html("");
      $("#everything").show();
      $("#settings").show();
      $("#background").show();
      $("body").css({"color": "black", "background": "#fa5"});
      $("#axhel").hide();
      $(".eye").addClass("eyes");
      $("#CLICK").html("C L IC K").css({"text-shadow": "none"})
      $("#backgroundExplain").html("").css({"text-shadow": "none"});
    }
    setTimeout(function(){
      nextText = true;
    }, 250);
  }
});







