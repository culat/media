function Main() {
	$("#button1").click(function(){
		let text = $("#text").val();
		$("#text").val($.base64.encode(text));
	});

	$("#button2").click(function(){
		let text = $("#text").val();
		$("#text").val($.base64.decode(text));
	});
}

Main();
