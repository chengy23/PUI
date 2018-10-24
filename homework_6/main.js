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





function aa() {
    var option = document.getElementsByName("optradio");
    var len = option.length;

    for (i=0; i <len; i++) {
        if (option[i].checked) {
            alert("check" + option[i].value);
        }
    }
}