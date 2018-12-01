$(document).ready(function(){
  var food = "";
  var cfood = "";
  var time = "";
  var contentShown = false;

  // Page scrolling effect
  $('#fullpage').fullpage({
    navigation: true,
    responsiveWidth: 320,
    scrollingSpeed: 900
  });

  //all food ingredients on the page is draggable
  var draggable = $(".draggable").draggable({
    opacity: 0.8
  });

  //when food is hover, show the information of that ingredient accrodingly
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

  // When food is clicked, both the hot pot and chosed food shakes to indicate that the food 
  // can be dragged into hot pot
  draggable.on('mousedown', function() {
    if (!contentShown) {
      $(".hp").addClass("shake");
      $(this).addClass("shake");
    }
  });

  // When click is finished, stop the shake animation
  draggable.on('mouseup', function(){
    if (!contentShown) {
      $(".card").css("visibility", "hidden");
      $(".hp").removeClass("shake");
      $(".hp").removeClass("zoomInLeft");
      $(this).removeClass("shake"); 
    }
  });

  // Only show fade out effect when user drags the food in the hot pot area
  $(".droppable" ).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      //actions on the draggable element 
      $(ui.draggable).addClass("fadeOutDown");
      $(".fadeOutDown").off();
      $(".fadeOutDown").css("cursor", "auto");
    }
  });

  // When hot pot is clicked, shift to the left and show the information on the right
  $('.hp').click(function() {
    if (!contentShown) {
      contentShown = true;
      $('.hp').addClass("zoomOutLeft");
      $('.hp').removeClass("zoomInLeft");

      //appends an "active" class to .popup and .popup-content when the hot pot graph is clicked
      $(".popup-overlay, .popup-content").addClass("active");
      
      //all food ingredients become faded when the hot pot is clicked
      $('.fd').css("opacity", "0.3");
      $('.text, .text-l,').css("opacity", "0.9");
    }
  });
    

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $('.close').click(function() { 
    $(".popup-overlay, .popup-content").removeClass("active");
    $('.fd, .text, .text-l, .sauce').removeClass("fade");
    $('.hp').removeClass("zoomOutLeft");
    $('.hp').addClass("zoomInLeft"); 
    $('.fd, .text, .text-l,').css("opacity", "1");
    contentShown = false;
  });

});