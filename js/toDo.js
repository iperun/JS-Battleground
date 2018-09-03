// check off todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click on x to delete
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// add new items to List
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span>X</span> " + toDoText + "</li>");
  }
});
