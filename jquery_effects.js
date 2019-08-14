$('button').on("click", function(){
	$("div").slideToggle(1000, function(){
		$(this).remove();
	});
});

// counts down

function countDown(num) {

	if(num <= 0)
	{
		console.log("all done" + num);
		return
	}
	console.log(num);
	num--;
	countDown(num);
}

countDown(4);
