var animationSticker = new function() {
	
	this.getWaveAnimation = function() {
		var dur = 0.3;
		return [
			{
				'context':".right-arm",
				'repeat':1,
				'timeline':[
					{
						'duration':dur,
						'rotation':-70,
						'transformOrigin':"0% 50%",
						'ease': Power0.easeNone
					},
					{
						'duration':dur,
						'rotation':0,
						'transformOrigin':"0% 50%",
						'ease': Power0.easeNone
					}
				]
			},
			{
				'context':".right-arm .hand",
				'repeat':1,
				'timeline':[
					{
						'duration':dur,
						'rotation':-70,
						'transformOrigin':"0% 50%",
						'ease': Power0.easeNone
					},
					{
						'duration':dur,
						'rotation':0,
						'transformOrigin':"0% 50%",
						'ease': Power0.easeNone
					}
				]
			}
		];
	};
};