// check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");

		//creat new li add to ul

		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}

});
