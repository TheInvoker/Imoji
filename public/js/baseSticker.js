function baseSticker(container, scale, className) {

	var stickerBaseHtml = 
	'<div class="stickerBase ' + className + '">' +
		'<div class="main-body group">' +
			'<img class="head part"/>' +
			'<img class="chest part"/>' +
		'</div>' +
		'<div class="left-arm group">' +
			'<img class="left hand part"/>' +
			'<img class="left elbow part"/>' +
		'</div>' +
		'<div class="right-arm group">' +
			'<img class="right elbow part"/>' +
			'<img class="right hand part"/>' +
		'</div>' +
		'<div class="left-leg group">' +
			'<img class="left knee part"/>' +
			'<img class="left foot part"/>' +
		'</div>' +
		'<div class="right-leg group">' +
			'<img class="right knee part"/>' +
			'<img class="right foot part"/>' +
		'</div>' +
	'</div>';
	
	var stickerBase = $(stickerBaseHtml);
	
	stickerBase.css({
		'width':scale*250,
		'height':scale*250
	});
	stickerBase.find(".head").css({
		'width':scale*50,
		'height':scale*50
	});
	stickerBase.find(".chest").css({
		'width':scale*50,
		'height':scale*100
	});
	stickerBase.find(".elbow").css({
		'width':scale*50,
		'height':scale*20
	});
	stickerBase.find(".hand").css({
		'width':scale*50,
		'height':scale*20
	});
	stickerBase.find(".knee").css({
		'width':scale*20,
		'height':scale*50
	});
	stickerBase.find(".foot").css({
		'width':scale*20,
		'height':scale*50
	});
	
	$(container).append(stickerBase);
		
	function getValue(val, scale) {
		return (val * scale).toString() + "px";
	}

	this.setAnimation = function(animation) {
		
		TweenLite.to(stickerBase.find(".main-body"), 0, {left:getValue(100, scale), ease:Power0.easeNone});
		TweenLite.to(stickerBase.find(".left-arm"), 0, {top:getValue(60, scale), left:getValue(0, scale), ease:Power0.easeNone});
		TweenLite.to(stickerBase.find(".right-arm"), 0, {top:getValue(60, scale), left:getValue(150, scale), ease:Power0.easeNone});
		TweenLite.to(stickerBase.find(".left-leg"), 0, {top:getValue(150, scale), left:getValue(103, scale), ease:Power0.easeNone});
		TweenLite.to(stickerBase.find(".right-leg"), 0, {top:getValue(150, scale), left:getValue(127, scale), ease:Power0.easeNone});

		for(var i=0;i<animation.length;i+=1) {
			var contextObj = animation[i];
			var timelineArr = contextObj.timeline;
			var timeline = new TimelineMax({repeat:contextObj.repeat});
			for(var j=0;j<timelineArr.length;j+=1) {
				var tween = timelineArr[j];
				timeline = timeline.to(contextObj.context, tween.duration, tween);
			}
		}
	};
}