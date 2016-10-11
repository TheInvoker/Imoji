$(document).ready(function() {
	
	var stickerBase = humanSkeletonStickers.getBaseSkeleton();
	var skeletonPins = humanSkeletonStickers.getBaseSkeletonPins();
	var simpleBody = humanSkeletonStickers.getSimpleSticker();
	var waveAnimation = humanAnimationSticker.getWaveAnimation();
	
	var sticker = new makeSticker(stickerBase, skeletonPins, simpleBody, 1);
	
	$(".msgContainer").append(stickerBase);
	sticker.setAnimation(waveAnimation);
	
	$(".closepanel").click(function() {
		$(".inputFooter .imojiPanelContainer").removeClass("open");
		return false;
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
		$(".inputFooter .imojiPanelContainer").addClass("open");
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