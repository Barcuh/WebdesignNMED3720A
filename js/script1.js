$("#punchline-button1").on("click", function () {
    $("#punchline1").show();
    $("#punchline-button1").hide();
    $("#next-button1").show();
    $("html, body").css("background-color", "#7BB7E3");
});

$("#next-button1").on("click", function () {
    $("#joke1").hide(); //hides the first joke
    $("#next-button1").hide(); //hides previous button
    $("#punchline1").hide();//hide punchline
    $("#joke2").show();//show joke 2
    $("#punchline-button2").show();//shows punchline button
});

$("#punchline-button2").on("click", function () {
    $("#punchline2").show();
    $("#punchline-button2").hide();
    $("#next-button2").show();
    $("html, body").css("background-color", "#E3504D");
});

$("#next-button2").on("click", function () {
    $("#joke2").hide(); //hides the first joke
    $("#next-button2").hide(); //hides previous button
    $("#punchline2").hide();//hide punchline
    $("#joke3").show();//show joke 3
    $("#punchline-button3").show();//shows punchline button
});

$("#punchline-button3").on("click", function () {
    $("#punchline3").show();
    $("#punchline-button3").hide();
    $("html, body").css("background-color", "#E69245");
//    $("#next-button3").show();
});