$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#light").click(function() {
    $("#lorem").removeClass();
    $("#lorem").addClass("whitetext");
  })

  $("button#dark").click(function() {
    $("#lorem").removeClass();
  })
});