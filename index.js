// $("h1").css("color","red");

$("body").keydown(function(event){
    console.log(event.key);
    $("h1").text(event.key);
})