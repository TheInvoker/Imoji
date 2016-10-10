var animationSticker = new function() {
	
	this.getWaveAnimation = function() {
		var dur = 0.3;
		return [
			{
				'context':".left-arm",
				'repeat':0,
				'timeline':[
					{
						'duration':0,
						'rotation':-90,
						'transformOrigin':"100% 50%",
						'ease': Power0.easeNone
					}
				]
			},
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