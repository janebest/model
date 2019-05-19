var bbstab = document.getElementById("bbstab");
		var aNodes = bbstab.getElementsByTagName("a");
		var tablelist = document.getElementsByClassName("errorbbs");
		var input1 = document.getElementById("realname");
		var input2 = document.getElementById("idnum");
		var input3 = document.getElementById("phonenum");
		var input4 = document.getElementById("email");
		var input5 = document.getElementById("message");
		var input6 = document.getElementById("codefield");
		var input7 = document.getElementById("c_realname");
		var input8 = document.getElementById("c_idnum");
		
		
		input1.onfocus = function(){
			inputlist.value = "";
		}
		input1.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input2.onfocus = function(){
			inputlist.value = "";
		}
		input2.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input3.onfocus = function(){
			inputlist.value = "";
		}
		input3.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input4.onfocus = function(){
			inputlist.value = "";
		}
		input4.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input5.onfocus = function(){
			inputlist.value = "";
		}
		input5.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input6.onfocus = function(){
			inputlist.value = "";
		}
		input6.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input7.onfocus = function(){
			inputlist.value = "";
		}
		input7.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		input8.onfocus = function(){
			inputlist.value = "";
		}
		input8.onblur = function(){
				this.style.border = "1px solid red";
				this.value = "此处不能为空";
				this.style.color = "red";
		}
		
		for(var i = 0; i < aNodes.length; i++) {
		aNodes[i].onmouseover = function() {
			for(var j = 0; j < aNodes.length; j++) {
				aNodes[j].className = "";
			}
			this.className = "now";
			for(var m = 0; m < tablelist.length; m++) {
				if(m == this.getAttribute("title")) {
					tablelist[m].style.display = "block";
				}
				else {
					tablelist[m].style.display = "none";
				}
			}
		}
	}