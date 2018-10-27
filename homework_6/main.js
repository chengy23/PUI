var orderArray = []; 

//Saves order options in local storage
function saveOrder(productName, glazing, qty, price, img, id) {
  var orderObj = { item:productName, glazing:glazing, qty:qty, price:price, img:img, id:id };
  var orders = JSON.parse(localStorage.getItem("orders"));
  if (orders == null) {
    orderArray.push(orderObj);
    localStorage.setItem("orders", JSON.stringify(orderArray));
  } else {
    orders.push(orderObj);
    localStorage.setItem("orders", JSON.stringify(orders));
  }
} 

//Retrives data from local storage
function readOrder() {
  var orders = JSON.parse(localStorage.getItem("orders"));
  if (orders == null) {
    $('#cart').text("0"); 
    return;
  } else {
    for (var i=0; i< orders.length; i++) {
      var name = orders[i].item;
      var glazing = orders[i].glazing;
      var price = orders[i].price;
      var qty = orders[i].qty;
      var img = orders[i].img;
      var id = orders[i].id;
      generateTable(name, glazing, qty, price, img, id);
    }
    countTotal();
    $('#cart').text(orders.length); 
  }
}

//Counts total price in shopping cart page
function countTotal() {
  var total = 0;
  var orders = JSON.parse(localStorage.getItem("orders"));
  for (var i=0; i< orders.length; i++) {
    total = total + orders[i].price;
  }
  $("#total").text("Total: $" + total);
}

// generates item as a table on shopping cart page
function generateTable(name, glazing, qty, price, img, id) {
  var card = "<tr class='item_card'><td><img class='cart_img' src='" + img + "' alt='product picture'></td>\
            <td>\
              <p class='cart_product'>" + name + "</p>\
              <p class='cart_glaze'>" + glazing + "</p>\
            </td>\
            <td class='cart_qty'>" + qty + "</td>\
            <td id='price'>$" + price + "</td>\
            <td><button class='remove_btn' id = '" + id + "'>X</button></td></tr>";
  $('table').append(card);
}
 

$(document).ready(function(){
  var quantity= 1;
  var price= 5;
  var imgLink="img/product1.png";
  var glazing = "No glazing";
  var productName = $(".item_name").text();
  
  readOrder();
  
  //quantity options 
  $(".qty").click(function() { 
    if($(this).hasClass("unselected")) {
      $(".qty").removeClass("selected");
      $(".qty").addClass("unselected");
      $(this).removeClass("unselected");
      $(this).addClass("selected");
    } 
    quantity = $(this).val();
    price = quantity * 5;
    $('#price').text("$" + price + " / " + quantity); 
  });

  //glazing options
  $(".glaze").click(function() { 
    if($(this).hasClass("unselected")) {
      $(".glaze").removeClass("selected");
      $(".glaze").addClass("unselected");
      $(this).removeClass("unselected");
      $(this).addClass("selected");
    } 
    glazing = $(this).text(); //save glazing option in variable
    if($(this).val() === "None") {
      $('.product_image').attr('src', 'img/product1.png');
      imgLink = "img/product1.png";
    }
    if($(this).val() === "Sugar Milk") {
      $('.product_image').attr('src', 'img/sugar.png');
      imgLink = "img/sugar.png";
    }
    if($(this).val() === "Vanilla Milk") {
      $('.product_image').attr('src', 'img/vanilla.png');
      imgLink = "img/vanilla.png";
    }
    if($(this).val() === "Choco Milk") {
      $('.product_image').attr('src', 'img/choco.png');
      imgLink = "img/choco.png";
    }
  });

  //delay animation when user adds product in the shopping cart
  function adding(){
    $("#add_cart").css('opacity', 1);
    $("#add_cart").text("Add to Cart");
    //get number of orders
    var orders = JSON.parse(localStorage.getItem("orders"));
    $('#cart').text(orders.length); 
  }

  //shopping cart updates the number after clicking "add to cart" button
  $("#add_cart").click(function() { 
    //visual indication that item is added to the cart
    $(this).css('opacity', 0.5);
    $(this).text("Adding..."); 
    //generates random id for each object
    var id = Math.random();
    saveOrder(productName, glazing, quantity, price, imgLink, id);
    setTimeout(adding, 1000); 
  });

  //responsible for "remove" function. User can remove items from order list
  $(".remove_btn").click(function() { 
    $(this).parent().parent().remove(); 
    var id = $(this).attr("id");
    var orders = JSON.parse(localStorage.getItem("orders"));
    for (var i = 0; i < orders.length; i++) {
      if (id == orders[i].id) {
        orders.splice(i, 1);
      }
    }
    localStorage.setItem('orders',JSON.stringify(orders));
    countTotal();
  });
});
