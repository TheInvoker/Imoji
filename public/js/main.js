$(document).ready(function() {
	var skeletonPick;
	var animationPick;
	
	$(".closepanel").click(function() {
		$(".inputFooter .imojiPanelContainer").removeClass("open");
		return false;
	});
	$(".imojiPanelSkeleton > div").click(function() {
		$(".imojiPanelSkeleton").removeClass("open");
		$(".imojiPanelAction").addClass("open");
		skeletonPick = $(this).attr("data-value");
		return false;
	});
	$(".imojiPanelAction > div").click(function() {
		$(".imojiPanelSkeleton").addClass("open");
		$(".imojiPanelAction").removeClass("open");
		$(".closepanel").click();
		animationPick = $(this).attr("data-value");
		addSticker(skeletonPick, animationPick);
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

function addSticker(skeletonPick, animationPick) {
	if (skeletonPick == "0") {
		
		var stickerBase = humanSkeletonStickers.getBaseSkeleton();
		var skeletonPins = humanSkeletonStickers.getBaseSkeletonPins();
		var simpleBody = humanSkeletonStickers.getSimpleSticker();
		
		if (animationPick == "0") {
			var waveAnimation = humanAnimationSticker.getWaveAnimation();
		} else {
			return;
		}
	} else {
		return;
	}
	
	var sticker = new makeSticker(stickerBase, skeletonPins, simpleBody, 1);
	
	$(".msgContainer").append(stickerBase);
	sticker.setAnimation(waveAnimation);
}