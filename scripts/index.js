var flag = 0 // 0 - default, 1 - login, 2 - signup

function AnimatePanel(panel) {
	if(panel=="login" && flag==0) {
		flag=1;
		$("#login_panel").animate({"margin-left":"0px"}, 500, function() {
		
		});
		$("#default_panel").animate({"margin-left":"-500px"}, 500, function() {
		
		});
	} else if(panel=="default") {
		flag=0;
		$("#signup_panel").animate({"margin-left":"500px"}, 500, function() {
		
		});
		$("#login_panel").animate({"margin-left":"500px"}, 500, function() {
		
		});
		$("#default_panel").animate({"margin-left":"0px"}, 500, function() {
		
		});
	} else if(panel=="signup") {
		console.log("wow!");
		flag=2;
		$("#signup_panel").animate({"margin-left":"0px"}, 500, function() {
		
		});
		$("#default_panel").animate({"margin-left":"-500px"}, 500, function() {
		
		});
	}
}

function Error() {
	var uV = document.forms["userdata"]["username"].value;
	var pV = document.forms["userdata"]["password"].value;
	if(uV == "") {
		$("#error").text("Please enter a username!");
		$("#error").show(200);
		return false;
	} else if(pV == "") {
		$("#error").text("Please enter a password!");
		$("#error").show(200);
		return false;
	}
}
