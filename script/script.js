$(document).ready(function(){
	$(".review__content").owlCarousel({
		margin: 30,
		loop: true,
		items: 3,
		center: true,
	});
});


// window.addEventListener('scroll', function() {
// 	let showScroll = pageYOffset + 'px';
// 	if (showScroll <= 30 + 'px') {
// 		document.getElementById('header__nav').style = "display: block"
// 	} else {
// 		document.getElementById('header__nav').style = "display: none"
// 	}
// 	console.log(showScroll);
// });