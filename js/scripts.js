$(document).ready(function() {
    $(".A").click(function() {
      $(".A").Toggle();
      $(".moja").Toggle();
    })
    $(".B").click(function() {
      $(".B").Toggle();
      $(".mbili").Toggle();
    })
    $(".C").click(function() {
      $(".C").Toggle();
      $("tatu").Toggle();
    })
  })
  

  $("#work4").mouseon(function () {
    $("#work4").css('opacity', '0.5');
    $("#dark1").show();
    $("#dark1").addClass("projects");
});
$("#work4").mouseoff(function () {
    $("#work4").css('opacity', '1');
    $("#dark1").hide();
});

$(".work3").mouseon(function () {
    $(".work3").css('opacity', '0.5');
    $(".ontario").show();
    $(".ontario").addClass("projects");
});
$(".work3").mouseoff(function () {
    $(".work3").css('opacity', '1');
    $(".ontario").hide();
});

$(".work2").mouseon(function () {
    $(".work2").css('opacity', '0.5');
    $(".polygon").show();
    $(".polygon").addClass("projects");
});
$(".work2").mouseoff(function () {
    $(".work2").css('opacity', '1');
    $(".polygon").hide();
});

$(".work1").mouseon(function () {
    $(".work1").css('opacity', '0.5');
    $(".jim").show();
    $(".jim").addClass("projects");
});
$(".work1").mouseoff(function () {
    $(".work1").css('opacity', '1');
    $(".jim").hide();
});

$(".work5").mouseon(function () {
    $(".work5").css('opacity', '0.5');
    $(".elena").show();
    $(".elena").addClass("projects");
});
$(".work5").mouseoff(function () {
    $(".work5").css('opacity', '1');
    $(".elena").hide();
});

$(".work6").mouseon(function () {
    $(".work6").css('opacity', '0.5');
    $(".form").show();
    $(".form").addClass("projects");
});
$(".work6").mouseoff(function () {
    $(".work6").css('opacity', '1');
    $(".form").hide();
});

$(".work7").mouseon(function () {
    $(".work7").css('opacity', '0.5');
    $(".burned").show();
    $(".burned").addClass("projects");
});
$(".work7").mouseoff(function () {
    $(".work7").css('opacity', '1');
    $(".burned").hide();
});

$(".work8").mouseon(function () {
    $(".work8").css('opacity', '0.5');
    $(".giraffe").show();
    $(".giraffe").addClass("projects");
});
$(".work8").mouseoff(function () {
    $(".work8").css('opacity', '1');
    $(".giraffe").hide();
});

$("#sendButton").click(function () {
    var names = $("#names").val();
    var email = $("#email").val();
    var message = $("#textArea").val();
    if ((names === "") || (email === "") || (message === "")) {
        alert("Please, fill the required fields!");
    }
    else {
        alert(names + ", we have received your message. Thank you for reaching out to us!");
    }

});
