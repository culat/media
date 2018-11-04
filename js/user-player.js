$(document).ready(function(){
	$("#text").css("display", "block");
});

function RegistrationClick() {
	$("#top").click(function(){
		$("#text").css("display", "none");
		$("#video0").css("display", "block");
		$("#video0").get(0).play();
	});
}

function GetQueryString(name) {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let par = window.location.search.substr(1).match(reg);
	if (par != null) {
		return unescape(par[2]);
	} else {
		return null;
	}
}

function Main() {
	let url = GetQueryString("url");
	let type = GetQueryString("type");
	if (url != null) {
		url = $.base64.decode(url);
		RegistrationClick();
		$("#video0").attr("src", url);
		if (type != null) {
			$("#video0").attr("type", type);
		}
	} else {
		$("#text>span").html("未载入内容");
	}
}

Main();
