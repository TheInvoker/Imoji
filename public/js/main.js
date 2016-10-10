$(document).ready(function() {
	var waveAnimation = animationSticker.getWaveAnimation();
	var sticker = new baseSticker(".msgContainer", 1, "custom1");
	sticker.setAnimation(waveAnimation);
	
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