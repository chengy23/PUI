$(document).ready(function(){
  var food = "";
  var cfood = "";
  var time = "";
  var contentShown = false;

  var draggable = $(".draggable").draggable({
    opacity: 0.8
  });


  draggable.hover(
    function() {
      if (!contentShown) {
          if($(this).attr("id") === "beef") {
            food = "Beef";
            cfood = " 牛肉";
            time = "30s";
          }
          else if($(this).attr("id") === "mxw") {
            food = "Duck Blood (Mao Xue Wang)";
            cfood = " 毛血旺";
            time = "5 min";
          }
          else if($(this).attr("id") === "lamb") {
            food = "Mutton";
            cfood = " 羊肉";
            time = "30s";
          }
          else if($(this).attr("id") === "tripe") {
            food = "Beef Tripe";
            cfood = " 毛肚／牛百叶";
            time = "7-10s";
          }
          else if($(this).attr("id") === "brain") {
            food = "Pork Brain";
            cfood = " 脑花";
            time = "15 min";
          }
          else if($(this).attr("id") === "veg") {
            food = "Lettuce";
            cfood = " 生菜";
            time = "1 min";
          }
          else if($(this).attr("id") === "shrimp") {
            food = "Shrimp";
            cfood = " 虾仁";
            time = "2 min";
          }
          else if($(this).attr("id") === "fuzhu") {
            food = "Tofu Skin (Fu Zhu)";
            cfood = " 腐竹";
            time = "2 min";
          }
          else if($(this).attr("id") === "diaolong") {
            food = "Ribeye";
            cfood = " 吊龙";
            time = "8-12s";
          }
          else if($(this).attr("id") === "chibing") {
            food = "Chuck Rib";
            cfood = " 匙柄";
            time = "8-12s";
          }
          else if($(this).attr("id") === "beefball") {
            food = "Beef Ball";
            cfood = " 牛肉丸";
            time = "5 min";
          }
          else if($(this).attr("id") === "spinach") {
            food = "Spinach";
            cfood = " 菠菜";
            time = "1 min";
          }
          else if($(this).attr("id") === "potato") {
            food = "Potato";
            cfood = " 土豆";
            time = "3 min";
          }
          else if($(this).attr("id") === "lotusroot") {
            food = "Lotus Root";
            cfood = " 藕片";
            time = "3-5 min";
          }
          else if($(this).attr("id") === "niuganjun") {
            food = "Boletus";
            cfood = " 牛肝菌";
            time = "3 min";
          }
          else if($(this).attr("id") === "tofu") {
            food = "Tofu";
            cfood = " 豆腐";
            time = "3-5 min";
          }
          else if($(this).attr("id") === "enokitake") {
            food = "Enokitake";
            cfood = " 金针菇";
            time = "2 min";
          }
          else if($(this).attr("id") === "oyster") {
            food = "Oyster Mushroom";
            cfood = " 平菇";
            time = "3 min";
          }
          else if($(this).attr("id") === "songrong") {
            food = "Matsutake";
            cfood = " 松茸";
            time = "3 min";
          }
          
          var content = "<div class='card cook-overlay'>\
                            <div class='card-body'>\
                                <h5 class='card-title'>" + food + cfood + "</h5>\
                                <p class='card-text'> Recommended cooking time: " + time + "\
                                <p class='heavy'>COOK NOW!</p>\
                                <img class='drag' src='Assets/img/drag.png'>\
                                </p>\
                            </div>\
                          </div>";
  
          $('#bg-part2, #bg-part3, #bg-part4, #bg-part5').append(content);
        } 
        $(this).css("opacity", "0.8");
        $(".card", this).css({
          visibility: "visible",
          opacity: 0.8
        }); 
  
    }, function() {
      $(".card").css({
        visibility: "hidden",
      });
      $(this).css("opacity", "1");
    }
  );

  

  draggable.on('mousedown', function() {
    if (!contentShown) {

      $(".hp").addClass("shake");
      $(this).addClass("shake");
    }
  });


  draggable.on('mouseup', function(){
    if (!contentShown) {
      $(".card").css("visibility", "hidden");
    $(".hp").removeClass("shake");
    $(".hp").removeClass("zoomInLeft");
    $(this).removeClass("shake"); 
    }
  });

 
    $( ".droppable" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function(event, ui) {
          //actions on the draggable element 
        $(ui.draggable).addClass("fadeOutDown");
        // $(".fadeOutDown").css("display", "none");
        // $(".fadeOutDown").css({
        //   transition: "0.5s linear",
        //   display: none
        // });

        $(".fadeOutDown").off();
        $(".fadeOutDown").css("cursor", "auto");
      }

    });

  
  

  // $draggable.on( 'pointerDown', function() {

  //    var content = "<div class='card cook-overlay'>\
  //                     <div class='card-body'>\
  //                         <h5 class='card-title'>Shrimp</h5>\
  //                         <h5 class='card-title'>虾仁</h5>\
  //                         <p class='card-text'> Recommended cooking time: 2 min\
  //                           <p class='heavy'>COOK NOW!</p>\
  //                         </p>\
  //                     </div>\
  //                   </div>";
  //     $('#bg-part2').append(content);
  //     $('.card').css("visibility", "visible");


  // });
  
  // $draggable.on( 'pointerUp', function() {
  //    $('.card').css("visibility", "hidden");
    
  // });

//   $draggable.on( 'dragStart', function() {
//     $(this).css("background", "black");
   
//  });

  $('#fullpage').fullpage({
    navigation: true,
    responsiveWidth: 320,
    scrollingSpeed: 900
    // scrollOverflow: true
  });

 


  $('.hp').click(function() {
    if (!contentShown) {
      contentShown = true;
      $('.hp').addClass("zoomOutLeft");
      $('.hp').removeClass("zoomInLeft");
    // $(".fd").off("mouseenter mouseleave");

    //appends an "active" class to .popup and .popup-content when the hot pot graph is clicked
      $(".popup-overlay, .popup-content").addClass("active");
    //all food ingredients become faded when the hot pot graph is clicked
      $('.fd').css("opacity", "0.3");
      $('.text, .text-l,').css("opacity", "0.9");
    }
    // $(".dropped").css("visibility", "hidden");
    });
    

    //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 

    $('.close').click(function() { 
      // draggable.on("mouseenter mouseleave");
      $(".popup-overlay, .popup-content").removeClass("active");
      $('.fd, .text, .text-l, .sauce').removeClass("fade");
      $('.hp').removeClass("zoomOutLeft");
      $('.hp').addClass("zoomInLeft"); 
      $('.fd, .text, .text-l,').css("opacity", "1");
      contentShown = false;
  });




//   var draggable = $('#draggable'); //element 

// draggable.on('mousedown', function(e){
// 	var dr = $(this).addClass("drag").css("cursor","move");
// 	height = dr.outerHeight();
// 	width = dr.outerWidth();
// 	max_left = dr.parent().offset().left + dr.parent().width() - dr.width();
// 	max_top = dr.parent().offset().top + dr.parent().height() - dr.height();
// 	min_left = dr.parent().offset().left;
// 	min_top = dr.parent().offset().top;

// 	ypos = dr.offset().top + height - e.pageY,
// 	xpos = dr.offset().left + width - e.pageX;
// 	$(document.body).on('mousemove', function(e){
// 		var itop = e.pageY + ypos - height;
// 		var ileft = e.pageX + xpos - width;
		
// 		if(dr.hasClass("drag")){
// 			if(itop <= min_top ) { itop = min_top; }
// 			if(ileft <= min_left ) { ileft = min_left; }
// 			if(itop >= max_top ) { itop = max_top; }
// 			if(ileft >= max_left ) { ileft = max_left; }
// 			dr.offset({ top: itop,left: ileft});
// 		}
// 	}).on('mouseup', function(e){
// 			dr.removeClass("drag");
//   });
// });



  // readOrder();
  
  // //quantity options 
  // $(".qty").click(function() { 
  //   if($(this).hasClass("unselected")) {
  //     $(".qty").removeClass("selected");
  //     $(".qty").addClass("unselected");
  //     $(this).removeClass("unselected");
  //     $(this).addClass("selected");
  //   } 
  //   quantity = $(this).val();
  //   price = quantity * 5;
  //   $('#price').text("$" + price + " / " + quantity); 
  // });
});