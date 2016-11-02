document.getElementById("create3").onclick = function(){
	window.alert("We're not taking sign ups yet.");
}

$(".hamburger").on("click", function(){
	
	if ($(this).hasClass("open")){
      $(this).removeClass("open");
      $("header").animate({
      	height: 70
      });

   } else {
   	$(this).addClass("open");
   	$("header").animate({
   		height: 300
   	});
   }
   
});