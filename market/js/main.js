$(function(){
	//鏁翠綋杞挱鍥�
	var webSwiper = new Swiper(".web-box",{
		mode: 'vertical',
		speed: 1200,
		effect: "coverflow",
		onlyExternal:true,
		mousewheelControl: true,
		initialSlide: 0,
		onSlideChangeEnd:function(swiper){
			var index = swiper.activeIndex;
			if (index >= 1) {//绗簩椤靛線鍚�
				$("#go-top").fadeIn();
			} else{
				$("#go-top").hide();
			}
		}
	});	
	$("#go-top").click(function(){
		webSwiper.swipeTo(0,1000,false);
		setTimeout(function(){
			$("#go-top").fadeOut();
		},1200)
	})
})
//瑙嗛鎾斁鍖哄煙
//IE瑙嗛瀹藉害
var widthMax = $(document).width();
var height = $(window).height();
$("#object01,#object02,#video01,#video02").css({
	width:widthMax+"px",
	minWidth:"1600px",
	height:(widthMax*9)/16 + "px",
	minHeight:(1600*9)/16 + "px"
});
window.onresize = function(){
	$("#object01,#object02,#video01,#video02").css({
		width:$(document).width()+"px",
		minWidth:"1600px",
		height:"100%"
	});
	
}
//鎺у埗瑙嗛
var controllV = $("#web-controll-video")/*$("#web-controll-video")*/;
var video01 = document.getElementById("video01");
var video02 = document.getElementById("video02");
var object01 = $("#object01") /*document.getElementById("object01")*/;
var object02 = $("#object02")/*document.getElementById("object02")*/;
controllV.click(function(){
	//鍒ゆ柇娴忚鍣ㄧ増鏈琲e
	var userAgent = navigator.userAgent; 
    var isOpera = userAgent.indexOf("Opera") > -1; 
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE7 || IE8) {
        	$(".alt-video-box").fadeIn(600);
        	$("#object01").remove();
			var object02 = $('<object width="100%" height="" type="application/x-shockwave-flash" data="main/video/altVideo.swf" id="object02"><param name="movie" value="main/video/altVideo.swf" /><param name="flashvars" value="autostart=true&amp;file=main/video/altVideo.swf" /></object>');
			$("#alt-videoMain").append(object02);	
			$("#object01,#object02").css({
				width:widthMax+"px",
				minWidth:"1600px",
				height:(widthMax*9)/16 + "px",
				minHeight:(1600*9)/16 + "px"
			});
        }else{
        	video01.pause();
        	video02.play();
        }
    }else{
    	video01.pause();
    	video02.play();
    }	
	$(".alt-video-box").fadeIn(600);
});
$(".alt-video-close").click(function(){
	$(".alt-video-box").hide();
	var userAgent = navigator.userAgent; 
    var isOpera = userAgent.indexOf("Opera") > -1; 
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE7 || IE8) {
        	location.reload();
//      	$(".alt-video-box").hide();
//      	$("#object02").remove();
//      	console.log($("#object02"));
//			var object01 = $('<object width="100%" height="" type="application/x-shockwave-flash" data="video/inVideo.swf" id="object01"><param name="movie" value="video/inVideo.swf" /><param name="flashvars" value="autostart=true&amp;file=video/inVideo.swf" /></object>');
//			$("#web-showVideo").append(object01);
//			$("#object01,#object02").css({
//				width:widthMax+"px",
//				height:(widthMax*9)/16 + "px"
//			});	
        }else{
        	video01.play();
        	video02.pause();	        	
        }
    }else{
    	video01.play();
    	video02.pause();	    	
    }				
})
//鍒涘缓object01
function object01(){
	console.log("鍒涘缓object01");	
}
function object02(){
	console.log("鍒涘缓object02");
	
}
$(function(){
	//鍐呭js
	//鍟嗗搧鍝佺被
	$(".web-msg-main .web-msg-wrapper").roundabout({
		duration:1000,
		autoplay: true,
		autoplayDuration:2000,
		minOpacity: 0,
		maxOpacity: 1,
		reflect: false,
		startingChild: 3,
		autoplayInitialDelay: 2000,
		autoplayPauseOnHover: true,
		enableDrag: false,
		btnPrev:".web-goodsBtn-prev",
		btnNext:".web-goodsBtn-next"
	})
	
	//鐢ㄦ埛璇勪环闅忔満鑳屾櫙鑹�
	var colors = ["#efe8f1","#e9e8f1","#ecf1e8","#f1eae8","#e8eef1"];
	var msgs = $(".web-userEval-msg");
	//瀛椾綋澶у皬
	var evalMain = $(".web-user-evalMain");
	msgs.each(function(i,e){
		$(e).css("background-color",colors[i]);
	});
	msgs.eq(2).css({
			width:"280px",
			height:"350px",
			top:"40px"
	});
	evalMain.eq(2).css({
		height:"54%",
		fontSize:"16px",
		lineHeight:"24px"
	});
	msgs.mousemove(function(){
		var ithis = $(this);
		var i = msgs.index(this);
		
		msgs.css({
			width:"220px",
			height:"270px",
			top:"0px"
		});
		evalMain.css({
			height:"44%",
			fontSize:"12px",
			lineHeight:"16px"
		});
		msgs.eq(i).css({
			width:"280px",
			height:"350px",
			top:"40px"
		});
		evalMain.eq(i).css({
			height:"54%",
			fontSize:"16px",
			lineHeight:"24px"
		});
	})
	//鐢ㄦ埛璇勪环绛夌骇
	var gides = $(".web-user-gride");
	gides.each(function(){
		var ithis = $(this);
		var grideNum = ithis.attr("gride-type")-0;
		for (var j= 0;j < grideNum;j++) {
			var iele = $("<i class='web-icon-start'></i>");
			ithis.append(iele);
		}
	})
	
	//浣庣増鏈祻瑙堝櫒鎻愮ず妗�
	$(".alt-brower-close").click(function(){
		$(".alt-brower-hitBox").fadeOut(600);
	})
});




