// MEMBERS SLIDER CODE
var member = document.getElementsByClassName('member');
var memberAmount = member.length;
var firstVisibleMemberNumber = 0;
var lastVisibleMemberNumber;
var visibleMemberAmount;
var sliderMode = 1;
var memberWidth;
var memberWidthAndMargin;
var memberMargin;
// responsiveness of slider
if (window.innerWidth < 768) {
	lastVisibleMemberNumber = 1;
	visibleMemberAmount = 2;
	memberWidth = 32;
	memberWidthAndMargin = 40;
	memberMargin = 4;
} else {
	lastVisibleMemberNumber = 3;
	visibleMemberAmount = 4;
	memberWidth = 16;
	memberWidthAndMargin = 20;
	memberMargin = 2;
}
var sliderActionsInitial = memberAmount - visibleMemberAmount;
var sliderActions = sliderActionsInitial;
var sliderActionsMinus = -sliderActionsInitial;

	// assignment of slider dimensions according to 'member' amount for browsers, which
	// do not support 'vw'
var members__sliderInnerWrapper = document.getElementsByClassName('members__slider-inner-wrapper')[0];
members__sliderInnerWrapper.style.width = 100*memberAmount/visibleMemberAmount + "%";
for (var i = 0; i < memberAmount; i++) {
	member[i].style.width = 100*8/(memberAmount*10) + "%";
	member[i].style.margin = "0 " + 100*1/(memberAmount*10) + "%";
}
	// assignment of slider dimensions with 'vw' units according to 'member' amount
members__sliderInnerWrapper.style.width = memberAmount*memberWidthAndMargin + "vw";
for (var i = 0; i < memberAmount; i++) {
	member[i].style.width = memberWidth + "vw";
	member[i].style.margin = "0 " + memberMargin + "vw";
}

	// hide 'members' out of members__sliderInnerWrapper
if (memberAmount > visibleMemberAmount) {
	var firstHiddenMemberNumber = visibleMemberAmount;
	for (var i = firstHiddenMemberNumber; i < memberAmount; i++) {
		member[i].style.opacity = "0";
	}
}
	// event listeners for left and right arrows
var arrowLeft = document.getElementsByClassName('members__arrow-left-container')[0];
var arrowRight = document.getElementsByClassName('members__arrow-right-container')[0];
arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

var translateDistance = 0;
function slideLeft() {
	sliderMode = 0;
	if (lastVisibleMemberNumber < memberAmount-1) {
		translateDistance -= memberWidthAndMargin;
		for (var i = firstVisibleMemberNumber; i < lastVisibleMemberNumber + 1; i++) {
			member[i].style.opacity = "0";			
		}
		members__sliderInnerWrapper.style.transform = "translate(" + translateDistance + "vw)";
		for (i = firstVisibleMemberNumber+1; i < lastVisibleMemberNumber + 2; i++) {
			member[i].style.opacity = "1";			
		}		
		firstVisibleMemberNumber++;
		lastVisibleMemberNumber++;
	} 
	setTimeout(function(){sliderMode=1;}, 5000);
}

function slideRight() {
	sliderMode = 0;
	if (firstVisibleMemberNumber > 0) {
		translateDistance += memberWidthAndMargin;
		for (var i = firstVisibleMemberNumber; i < lastVisibleMemberNumber + 1; i++) {
			member[i].style.opacity = "0";			
		}
		members__sliderInnerWrapper.style.transform = "translate(" + translateDistance + "vw)";
		for (i = firstVisibleMemberNumber-1; i < lastVisibleMemberNumber; i++) {
			member[i].style.opacity = "1";			
		}		
		firstVisibleMemberNumber--;
		lastVisibleMemberNumber--;
	} 
	setTimeout(function(){sliderMode=1;}, 5000);
}

setInterval(slideMembers, 3000);
function slideMembers() {
	if (sliderMode === 1) {
		if (sliderActions > 0) {
			slideLeft();
			sliderActions--;
		} else {
			slideRight();
			sliderActionsMinus++;
			if (sliderActionsMinus === 0) {
				sliderActions = sliderActionsInitial;
				sliderActionsMinus = -sliderActionsInitial;
			}
		}
	}		
}

// HAMBURGER MENU TOGGLING
var hamburgerMenuIcon = document.getElementsByClassName('hamburger-menu-icon')[0];
var menu = document.getElementsByClassName('menu')[0];
hamburgerMenuIcon.addEventListener('click', function(){
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
});










