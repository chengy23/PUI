var count = 0;
$(document).ready(function(){

  $(".qty").click(function() { 
    if($(this).hasClass("unselected")) {
      $(".qty").removeClass("selected");
      $(".qty").addClass("unselected");
      $(this).removeClass("unselected");
      $(this).addClass("selected");
    } 
  });

  $(".glaze").click(function() { 
    if($(this).hasClass("unselected")) {
      $(".glaze").removeClass("selected");
      $(".glaze").addClass("unselected");
      $(this).removeClass("unselected");
      $(this).addClass("selected");
    } 
  });

  //delay animation when user adds product in the shopping cart
  function adding(){
    $("#add_cart").css('opacity', 1);
    $("#add_cart").text("Add to Cart");
    $('#cart').text(count); 
  }

  $("#add_cart").click(function() { 
    count++;
    $(this).css('opacity', 0.5);
    $(this).text("Adding..."); 
    //visual indication that item is added to the cart
    setTimeout(adding, 1000); 
  });







});






    // option = getelementsbyclass("option")
    // var len = option.length;

    // for (i=0; i <len; i++) {
    //     if (option[i].checked) {
    //         alert("check" + option[i].value);
    //     }
    // }

    // var option = document.createElement('id');
    // option.id = "checked";
    // var option = document.getElementById("checked");
    // option.checked = true;
    // document.getElementById("demo").innerHTML = option;




