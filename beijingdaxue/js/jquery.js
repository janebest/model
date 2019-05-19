window.onload = function(){
	//列表导航栏隐藏显示
	 var nav = document.getElementById("nav");
	 var liNodes = nav.getElementsByTagName("li");
	 for(var i=0; i<liNodes.length; i++){
	 	liNodes[i].onmouseover = function(){
	 		this.getElementsByClassName("minfoWrap")[0].style .display = "block";
	 		
	 	}
	 	liNodes[i].onmouseout = function(){
	 		this.getElementsByClassName("minfoWrap")[0].style.display = "none";
	 	}
	 }
	//banner轮播
	var index = 1;
	var intervalId = setInterval(function() {
		clearInterval(intervalId);
		document.getElementsByClassName("container")[0].style.marginLeft = "-1349px";
		document.getElementsByClassName("container")[0].style.transition = "all 3s";
	},  3000)

	document.getElementsByClassName("container")[0].addEventListener("webkitTransitionEnd", function() {
		if(index == 4) {
			index = 0;
			document.getElementsByClassName("container")[0].style.marginLeft = ""+ -index*1349 +"px";
			document.getElementsByClassName("container")[0].style.transition = "all 0s"
		}
		intervalId = setInterval(function() {
			index = index + 1;
			clearInterval(intervalId);
			document.getElementsByClassName("container")[0].style.marginLeft = ""+ -index*1349 +"px";
			document.getElementsByClassName("container")[0].style.transition = "all 3s"
		}, 3000)
	})
	//tab切换
	var tzgga1 = document.getElementById("tzgga1");
	var tzgga2 = document.getElementById("tzgga2");
	var pkuNotice = document.getElementById("pku_notice");
	var pkuNotice2 = document.getElementById("pku_notice2");
	tzgga1.onmouseover = function(){
		this.style.borderLeft = "2px solid rgb(140,0,0)";
		tzgga2.style.borderLeft = "2px solid rgb(206,206,206)";
		pkuNotice.style.display = "block";
		pkuNotice2.style.display = "none";
	}
	tzgga2.onmouseover = function(){
		this.style.borderLeft = "2px solid rgb(140,0,0)";
		tzgga1.style.borderLeft = "2px solid rgb(206,206,206)";
		pkuNotice.style.display = "none";
		pkuNotice2.style.display = "block";
	}
	
	//淡出淡入
	var conR = document.getElementById("conR");
	var imgList = conR.getElementsByClassName("img");
	for(var j=0; j<imgList.length; j++){
		imgList[j].onmouseover = function(){
			this.getElementsByTagName("h3")[0].style.display = "block";
		}
		imgList[j].onmouseout = function(){
			this.getElementsByTagName("h3")[0].style.display = "none";
		}
	}
	var ztw1 = document.getElementById("ztw1");
	var picList = ztw1.getElementsByClassName("pic");
	for(var j=0; j<picList.length; j++){
		picList[j].onmouseover = function(){
			this.getElementsByTagName("h3")[0].style.display = "block";
		}
		picList[j].onmouseout = function(){
			this.getElementsByTagName("h3")[0].style.display = "none";
		}
	}
	
	//回到顶部
	window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                document.getElementById("gotoTop").style.display = "block";
            } else {
                document.getElementById("gotoTop").style.display = "none";
            }
        }
	function scrollshow(){
		if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
			gotoTop.style.display = "block";
		}else{
			gotoTop.style.display = "none";
		}
	}
	gotoTop.onclick = function(){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
		 
	}
}

