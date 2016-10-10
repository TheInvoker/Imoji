function baseSticker(container, scale, stickerType) {

	function simpleSticker() {
		return {
			'width' : 250,
			'height' : 250,
			'pins': [
				{
					'name':".main-body",
					'top':0,
					'left':100
				},
				{
					'name':".left-arm",
					'top':60,
					'left':0
				},
				{
					'name':".right-arm",
					'top':60,
					'left':150
				},
				{
					'name':".left-leg",
					'top':150,
					'left':103
				},
				{
					'name':".right-leg",
					'top':150,
					'left':127
				}
			],
			'dimensions' : [
				{
					'name':".head",
					'width':50,
					'height':50,
					'bgcolor':undefined,
					'src':'http://www.w3schools.com/cssref/smiley.gif',
					'top':0,
					'left':0
				},
				{
					'name':".chest",
					'width':50,
					'height':100,
					'bgcolor':'orange',
					'src':'',
					'top':50,
					'left':0
				},
				{
					'name':".elbow:nth-child(1)",
					'width':50,
					'height':20,
					'bgcolor':'red',
					'src':'',
					'top':0,
					'left':0
				},
				{
					'name':".elbow:nth-child(2)",
					'width':50,
					'height':20,
					'bgcolor':'navy',
					'src':'',
					'top':0,
					'left':50
				},
				{
					'name':".hand:nth-child(1)",
					'width':50,
					'height':20,
					'bgcolor':'green',
					'src':'',
					'top':0,
					'left':0
				},
				{
					'name':".hand:nth-child(2)",
					'width':50,
					'height':20,
					'bgcolor':'olive',
					'src':'',
					'top':0,
					'left':50
				},
				{
					'name':".knee:nth-child(1)",
					'width':20,
					'height':50,
					'bgcolor':'yellow',
					'src':'',
					'top':0,
					'left':0
				},
				{
					'name':".knee:nth-child(2)",
					'width':20,
					'height':50,
					'bgcolor':'magenta',
					'src':'',
					'top':0,
					'left':0
				},
				{
					'name':".foot:nth-child(1)",
					'width':20,
					'height':50,
					'bgcolor':'blue',
					'src':'',
					'top':50,
					'left':0
				},
				{
					'name':".foot:nth-child(2)",
					'width':20,
					'height':50,
					'bgcolor':'blue',
					'src':'',
					'top':50,
					'left':0
				}
			]
		};
	};
	
	var stickerBaseHtml = 
	'<div class="stickerBase">' +
		'<div class="main-body group">' +
			'<div>' +
				'<div class="head part"/>' +
				'<div class="chest part"/>' +
			'</div>' +
		'</div>' +
		'<div class="left-arm group">' +
			'<div>' +
				'<div class="left hand part"/>' +
				'<div class="left elbow part"/>' +
			'</div>' +	
		'</div>' +
		'<div class="right-arm group">' +
			'<div>' +
				'<div class="right elbow part"/>' +
				'<div class="right hand part"/>' +
			'</div>' +
		'</div>' +
		'<div class="left-leg group">' +
			'<div>' +
				'<div class="left knee part"/>' +
				'<div class="left foot part"/>' +
			'</div>' +
		'</div>' +
		'<div class="right-leg group">' +
			'<div>' +
				'<div class="right knee part"/>' +
				'<div class="right foot part"/>' +
			'</div>' +
		'</div>' +
	'</div>';
	
	var stickerBase = $(stickerBaseHtml);
	
	var simple;
	if (stickerType == 'simple') {
		simple = simpleSticker();
	} else {
		alert("Invalid sticker type!");
		return;
	}
	
	var partsArr = simple.dimensions;
	var pinsArr = simple.pins;
	
	stickerBase.css({
		'width':scale*simple.width,
		'height':scale*simple.height
	});
	for(var i=0;i<partsArr.length; i+=1) {
		var part = partsArr[i];
		stickerBase.find(part.name).css({
			'width':scale*part.width,
			'height':scale*part.height,
			'background-color':part.bgcolor,
			'background-image':"url('" + part.src + "')",
			'background-size':'100% 100%',
			'top':scale*part.top,
			'left':scale*part.left
		});
	}
	for(var i=0;i<pinsArr.length; i+=1) {
		var pin = pinsArr[i];
		stickerBase.find(pin.name).css({
			'top':scale*pin.top,
			'left':scale*pin.left
		});
	}
	
	$(container).append(stickerBase);
		
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