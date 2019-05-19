	    $("#b1").mouseover(function(){
		$("#tab1").hide();
		$("#tab2").show();
		$("#b0").removeClass();
	})
	$("#b1").mouseout(function(){
		$("#tab2").hide();
		$("#tab1").show();
		$("#b0").addClass("now");
	})
	$("#realname,#idnum,#phonenum,#email,#message,#codefield,#c_realname,#c_idnum").blur(function(){
			if($(this).val() == ""){
				$(this).css({
					"border":"1px solid red",
					"color":"red"
				})
				$(this).val("此处不能为空");
			}
		})
		$("#realname,#idnum,#phonenum,#email,#message,#codefield,#c_realname,#c_idnum").focus(function(){
			if($(this).val("")){
				$(this).css({
					"border":"1px solid blue",
					"color":"black"
				})
		}
		})
		