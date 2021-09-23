// Анимация AOS

AOS.init();

AOS.init({

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 50, // offset (in px) from the original trigger point
	delay: 200, // values from 0 to 3000, with step 50ms
	duration: 750, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
});