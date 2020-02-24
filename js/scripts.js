$(document).ready(function() {
    $(".A,.moja").click(function() {
      $(".A,.moja").toggle();
      
    })
    $(".B,.mbili").click(function() {
      $(".B,.mbili").toggle();
      
    })
    $(".C,.tatu").click(function() {
      $(".C,.tatu").toggle();
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
        $(".elen").slideToggle();
    })
    $("#work6").hover(function(){
        $(".form").slideToggle();
    })
    $("#work7").hover(function(){
        $(".burned").slideToggle();
    })
    $("#work8").hover(function(){
        $(".girrafe").slideToggle();
    })

$("#sendButton").click(function () {
    var names = $("#names").val();
    var email = $("#email").val();
    var message = $("#textArea").val();
    if ((names === "") || (email === "") || (message === "")) {
        alert("Please, fill the required fields!");
    }
    else {
        alert(names+", we have received your message. Thank you for reaching out to us!");
    }

});
  });
  


