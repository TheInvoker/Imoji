function baseSticker(container, scale) {

	function simpleSticker() {
		return {
			'width' : 250,
			'height' : 250,
			'dimensions' : [
				{
					'name':".head",
					'width':50,
					'height':50,
					'bgcolor':'cyan',
					'src':''
				},
				{
					'name':".chest",
					'width':50,
					'height':100,
					'bgcolor':'orange',
					'src':''
				},
				{
					'name':".elbow:nth-child(1)",
					'width':50,
					'height':20,
					'bgcolor':'red',
					'src':''
				},
				{
					'name':".elbow:nth-child(2)",
					'width':50,
					'height':20,
					'bgcolor':'navy',
					'src':''
				},
				{
					'name':".hand",
					'width':50,
					'height':20,
					'bgcolor':'green',
					'src':''
				},
				{
					'name':".knee",
					'width':20,
					'height':50,
					'bgcolor':'yellow',
					'src':''
				},
				{
					'name':".foot",
					'width':20,
					'height':50,
					'bgcolor':'blue',
					'src':''
				}
			],
			'pins':[
				{
					'name':".main-body",
					'left':100,
					'top':0
				},
				{
					'name':".left-arm",
					'left':0,
					'top':60
				},
				{
					'name':".right-arm",
					'left':150,
					'top':60
				},
				{
					'name':".left-leg",
					'left':103,
					'top':150
				},
				{
					'name':".right-leg",
					'left':127,
					'top':150
				}
			]
		};
	};
	
	var stickerBaseHtml = 
	'<div class="stickerBase">' +
		'<div class="main-body group">' +
			'<div class="head part"/>' +
			'<div class="chest part"/>' +
		'</div>' +
		'<div class="left-arm group">' +
			'<div class="left hand part"/>' +
			'<div class="left elbow part"/>' +
		'</div>' +
		'<div class="right-arm group">' +
			'<div class="right elbow part"/>' +
			'<div class="right hand part"/>' +
		'</div>' +
		'<div class="left-leg group">' +
			'<div class="left knee part"/>' +
			'<div class="left foot part"/>' +
		'</div>' +
		'<div class="right-leg group">' +
			'<div class="right knee part"/>' +
			'<div class="right foot part"/>' +
		'</div>' +
	'</div>';
	
	var stickerBase = $(stickerBaseHtml);
	
	var simple = simpleSticker();
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
			'background-image':"url('" + part.src + "')"
		});
	}
	for(var i=0;i<pinsArr.length; i+=1) {
		var pin = pinsArr[i];
		stickerBase.find(pin.name).css({
			'left':scale*pin.left,
			'top':scale*pin.top
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