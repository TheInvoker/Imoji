function getValue(val, scale) {
	return (val * scale).toString() + "px";
}

$(document).ready(function() {
	
	var scale = 0.3;
	$(".stickerBase").css({
		'width':scale*250,
		'height':scale*250
	});
	$(".stickerBase .head").css({
		'width':scale*50,
		'height':scale*50
	});
	$(".stickerBase .chest").css({
		'width':scale*50,
		'height':scale*100
	});
	$(".stickerBase .elbow").css({
		'width':scale*50,
		'height':scale*20
	});
	$(".stickerBase .hand").css({
		'width':scale*50,
		'height':scale*20
	});
	$(".stickerBase .knee").css({
		'width':scale*20,
		'height':scale*50
	});
	$(".stickerBase .foot").css({
		'width':scale*20,
		'height':scale*50
	});
	
	
	TweenLite.to(".main-body", 0, {left:getValue(100, scale), ease:Power0.easeNone});
	TweenLite.to(".left-arm", 0, {top:getValue(60, scale), left:getValue(0, scale), ease:Power0.easeNone});
	TweenLite.to(".right-arm", 0, {top:getValue(60, scale), left:getValue(150, scale), ease:Power0.easeNone});
	TweenLite.to(".left-leg", 0, {top:getValue(150, scale), left:getValue(103, scale), ease:Power0.easeNone});
	TweenLite.to(".right-leg", 0, {top:getValue(150, scale), left:getValue(127, scale), ease:Power0.easeNone});

	
	var dur = 0.3;
	
	var rightArm = new TimelineMax({repeat:0});
	rightArm.to(".right-arm", dur, {
		rotation : -70,
		transformOrigin : "0% 50%",
		ease: Power0.easeNone
	})
	.to(".right-arm", dur, {
		rotation : 0,
		transformOrigin : "0% 50%",
		ease: Power0.easeNone
	});
	
	var rightHand = new TimelineMax({repeat:0});
	rightHand.to(".right-arm .hand", dur, {
		rotation : -70,
		transformOrigin : "0% 50%",
		ease: Power0.easeNone
	})
	.to(".right-arm .hand", dur, {
		rotation : 0,
		transformOrigin : "0% 50%",
		ease: Power0.easeNone
	});
	
	setUpForm();
});


function setUpForm() {
	var form = $(".inputFooter > form");
	var comment = form.find("#comment");
	var addImojiButton = form.find("#addImoji");
	form.on('submit', function(e) {
		var msg = comment.val().trim();
		comment.val('');
		if (msg.length > 0) {
			addComment(msg, {});
		}
		return false;
	});
	addImojiButton.click(function() {
		$(".inputFooter .imojiPanel").addClass("open");
		return false;
	});
	comment.focus();
}


function addComment(msg, sender) {
	var date = new Date();
	var displayTime = moment(date).format('MMM D h:m A');
	var msgObj = $("<div class='text'></div>");
	msgObj.text(msg);
	var dateObj = $("<div class='date'></div>");
	dateObj.text(displayTime);
	var wrapperObj = $("<div class='message left'></div><br/>");
	wrapperObj.append(msgObj).append(dateObj);
	$(".msgContainer").append(wrapperObj);
}