const loader = document.querySelector(".loader");

gsap.set(loader, {
	scaleX:0,
	xPercent:-5,
	yPercent: -50,
	transformOrigin: "left center",
	autoAlpha: 1 
});

function loaderIn() {
	return gsap.fromTo(loader, {
		scaleX: 0,
		xPercent: -5,
	},

	{
		duration: 0.8, 
		xPercent: 0,
		scaleX: 1,
		ease: "Power4.inOut",
		transformOrigin: "left center"
	});
}

function loaderAway() {
	return gsap.to(loader, {
		duration: 0.8,
		scaleX: 0,
		xPercent: 5,
		scaleX: 0,
		transformOrigin: "right center",
		ease: "Power4.inOut"
	});
}


	$(function(){
		barba.init({
			views: [{
				namespace: ‘aboutsection’,
				afterEnter: function(){
					
			            }
			        });

				}

			transitions: [{
				async leave(){
					await loaderIn();
				},	
				async enter(){
					loaderAway();
				}
			}]
		})







	





	
