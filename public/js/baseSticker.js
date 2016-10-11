function makeSticker(stickerBase, skeleton, simpleBody, scale) {

	var pinsArr = skeleton.pins;
	var partsArr = simpleBody.parts;
	
	stickerBase.css({
		'width':scale*skeleton.width,
		'height':scale*skeleton.height
	});
	
	for(var i=0;i<pinsArr.length; i+=1) {
		var pin = pinsArr[i];
		stickerBase.find(pin.name).css({
			'width':scale*pin.width,
			'height':scale*pin.height,
			'top':scale*pin.top,
			'left':scale*pin.left,
			'z-index':pin.z
		});
	}
	
	for(var i=0;i<partsArr.length; i+=1) {
		var part = partsArr[i];
		stickerBase.find(part.name).css({
			'width':scale*part.width,
			'height':scale*part.height,
			'background-color':part.bgcolor,
			'background-image':"url('" + part.src + "')",
			'background-size':'100% 100%',
			'top':scale*part.top,
			'left':scale*part.left,
			'z-index':part.z
		});
	}
	
	this.setAnimation = function(animation) {
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