function repeatLetter(a){
    return a.repeat(5);
}

$(".box").textfit('truncate');

function colorChange() {
    $("#container").css("border", "30px solid #E53535");
    $("#ovalContainer img").attr("src","oval2.png");
    $(".diag-box").css("display", "none");
    $(".diag-box-blue").css("display", "initial");
    $("#mainTitle").css("color","#E53535");
}

function revert() {
    $("#container").css("border", "30px solid #61b7ff");
    $("#ovalContainer img").attr("src","oval.png");
    $(".diag-box").css("display", "initial");
    $(".diag-box-blue").css("display", "none");
    $("#mainTitle").css("color","#61b7ff");
}

function menuPop(){
    $("#menuPopContainer").css("display", "flex");
    $("#ovalContainer p").text("");
    $("#ovalContainer img").attr("src", "cycle.png");
    $("#ovalContainer").css("animation", "grow 2s forwards");

    document.getElementById('clickThru').onmouseover = null;
    document.getElementById('clickThru').onmouseout = null;
}

function playMenu(){
    $("#playContainer").css("display","block");
    $("#menuPopContainer").css("display", "none");
    $("#ovalContainer").css("display", "none");
    $("#topHalf1 img").attr("src", "me.png");
}

function clearPlayMenu(){
    $("#playContainer").css("display","none");
    $("#menuPopContainer").css("display", "flex");
    $("#ovalContainer").css("display", "initial");
    $("#bottomHalf2 img").attr("src", "backBtn.png");
}

