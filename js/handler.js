
$("#qForm").submit(function (e) {
  e.preventDefault(); 
  e.stopPropagation();

  var form = $(this);
  var url = form.attr("action");

  $.ajax({
    type: "POST",
    url: "includes/controller.php",
    data: form.serialize(), 
    success: function () {
      console.log("Success");
      
    },
  });
});
