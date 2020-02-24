$(document).ready(function() {
    $(".A,.moja").click(function() {
      $(".A,.moja").toggle();
      $(".A,.moja").css("text-align","center")
    })
    $(".B,.mbili").click(function() {
      $(".B,.mbili").toggle();
      $(".B,.mbili").css("text-align","center")
    })
    $(".C,.tatu").click(function() {
      $(".C,.tatu").toggle();
      $(".C,.tatu").css("text-align","center")
    })
    $("#work4").hover(function(){
        $(".dark").slideToggle();
    })
    $("#work3").hover(function(){
        $(".ontario").slideToggle();
    })
    $("#work2").hover(function(){
        $(".polygon").slideToggle();
    })
    $("#work1").hover(function(){
        $(".jim").slideToggle();
    })
    $("#work5").hover(function(){
        $(".elena").slideToggle();
    })
    $("#work6").hover(function(){
        $(".project").slideToggle();
    })
    $("#work7").hover(function(){
        $(".burned").slideToggle();
    })
    $("#work8").hover(function(){
        $(".giraffe").slideToggle();
    })

$("#sendButton").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#textArea").val();
    if ((name === "") || (email === "") || (message === "")) {
        alert("Please, fill the required fields!");
    }
    else {
        alert(name+", we have received your message. Thank you for reaching out to us!");
    }

});
  });
  


