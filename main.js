function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}

function hideNavIfClickedOutside(e) {
	let header = document.getElementsByTagName('header')[0];
	
	e = e || event
	let target = e.target || e.srcElement
	innerId = target.id;

	if ( innerId == 'nav_menu_button' || isDescendant(header, target) || isDescendant(nav_menu_button, target) ) {

	} else {
		hideMobileNav();
	}
}

function showMobileNav() {
	let nav_menu_button = document.getElementById('nav_menu_button');
	let nav = document.getElementsByTagName('nav')[0];
	let header = document.getElementsByTagName('header')[0];

	if (header.classList.contains('mobile_nav_roll_up')) 
		header.classList.remove('mobile_nav_roll_up');

	header.classList.add('mobile_nav_roll_down');
	nav_menu_button.style.backgroundColor = 'white';
	nav_menu_button.getElementsByTagName('p')[0].style.color = 'black';
	nav.style.display = 'block';
}

function hideMobileNav() {
	let body = document.getElementsByTagName('body')[0];
	let nav_menu_button = document.getElementById('nav_menu_button');
	let nav = document.getElementsByTagName('nav')[0];
	let header = document.getElementsByTagName('header')[0];

	header.classList.remove('mobile_nav_roll_down');
	header.classList.add('mobile_nav_roll_up');
	
	setTimeout(() => {
		nav_menu_button.style.backgroundColor = 'black';
		nav_menu_button.getElementsByTagName('p')[0].style.color = 'white';
		nav.style.display = 'none';
		header.classList.remove('mobile_nav_roll_up');
		body.removeEventListener('click', hideNavIfClickedOutside);
	}, 200);
}

(function () {

window.onload = () => {
	let nav_menu_button = document.getElementById('nav_menu_button');
	let header = document.getElementsByTagName('header')[0];
	let nav = document.getElementsByTagName('nav')[0];
	let html = document.getElementsByTagName('html')[0];
	let body = document.getElementsByTagName('body')[0];
	let bg_img = document.getElementById("bg_img");
	const aspectRatio = 2880.0/1800.0;
	
	const updateBG = () => {
		if (window.innerWidth / window.innerHeight < aspectRatio) {
			bg_img.style.height = "100%";
			bg_img.style.width = "auto";
		} else {
			bg_img.style.height = "auto";
			bg_img.style.width = "100%";
		}
	}
		
	updateBG();
	
	window.addEventListener('resize', updateBG);

	nav_menu_button.addEventListener('click', () => {

		if ( nav.style.display == 'none' || nav.style.display == '' ) {
			showMobileNav();
			setTimeout(() => body.addEventListener('click', hideNavIfClickedOutside), 50);
		} else {
			hideMobileNav();
		}

	});
	
	// html.addEventListener('mousemove', (e) => {
	// 	const gradient = 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(40, 4, 73, 0.45)), ';
	// 	const isInBody = isDescendant(body, e.target);
		
	// 	html.style.background = isInBody ? gradient + 'url("./images/bg.jpg")' : gradient + 'url("./images/bg3.jpg")';
	// 	if (window.innerWidth / window.innerHeight < aspectRatio) {
	// 		html.style.backgroundSize = isInBody ? 'auto 101%' : 'auto 100%';
	// 	} else {
	// 		html.style.backgroundSize = isInBody ? '101% auto' : '100% auto';
	// 	}
	// 	html.style.backgroundRepeat = 'no-repeat';
	// 	html.style.backgroundPosition = 'center';
	// 	html.style.backgroundAttachment = 'fixed';
	// 	html.style.backgroundColor = 'black';
	// });
}

})();