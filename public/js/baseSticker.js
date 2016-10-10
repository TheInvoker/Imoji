function baseSticker(container, scale, stickerType) {

	function simpleSticker() {
		return {
			'width' : 250,
			'height' : 250,
			'pins': [
				{
					'name':".main-body",
					'width':50,
					'height':150,
					'top':0,
					'left':100,
					'z':1
				},
				{
					'name':".left-arm",
					'width':100,
					'height':20,
					'top':60,
					'left':5,//0,
					'z':2
				},
				{
					'name':".right-arm",
					'width':100,
					'height':20,
					'top':60,
					'left':145,//150,
					'z':0
				},
				{
					'name':".left-leg",
					'width':20,
					'height':100,
					'top':145,//150,
					'left':103,
					'z':2
				},
				{
					'name':".right-leg",
					'width':20,
					'height':100,
					'top':145,//150,
					'left':127,
					'z':0
				}
			],
			'dimensions' : [
				{
					'name':".head",
					'width':50,
					'height':50,
					'bgcolor':undefined,
					'src':'sticker/boy/head.png',
					'top':3,//0,
					'left':0,
					'z':3
				},
				{
					'name':".chest",
					'width':50,
					'height':100,
					'bgcolor':undefined,
					'src':'sticker/boy/chest.png',
					'top':50,
					'left':0,
					'z':2
				},
				{
					'name':".left-arm .elbow",
					'width':50,
					'height':20,
					'bgcolor':undefined,
					'src':'sticker/boy/leftarm.png',
					'top':0,
					'left':50,
					'z':3
				},
				{
					'name':".right-arm .elbow",
					'width':50,
					'height':20,
					'bgcolor':undefined,
					'src':'sticker/boy/rightarm.png',
					'top':0,
					'left':0,
					'z':1
				},
				{
					'name':".left-arm .hand",
					'width':50,
					'height':20,
					'bgcolor':undefined,
					'src':'',
					'top':0,
					'left':3,//0,
					'z':4
				},
				{
					'name':".right-arm .hand",
					'width':50,
					'height':20,
					'bgcolor':undefined,
					'src':'',
					'top':0,
					'left':47,//50,
					'z':0
				},
				{
					'name':".left-leg .knee",
					'width':20,
					'height':50,
					'bgcolor':undefined,
					'src':'sticker/boy/leftleg.png',
					'top':0,
					'left':0,
					'z':3
				},
				{
					'name':".right-leg .knee",
					'width':20,
					'height':50,
					'bgcolor':undefined,
					'src':'sticker/boy/rightleg.png',
					'top':0,
					'left':0,
					'z':1
				},
				{
					'name':".left-leg .foot",
					'width':20,
					'height':50,
					'bgcolor':undefined,
					'src':'',
					'top':47,//50,
					'left':0,
					'z':4
				},
				{
					'name':".right-leg .foot",
					'width':20,
					'height':50,
					'bgcolor':undefined,
					'src':'',
					'top':47,//50,
					'left':0,
					'z':0
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
			'left':scale*part.left,
			'z-index':part.z
		});
	}
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