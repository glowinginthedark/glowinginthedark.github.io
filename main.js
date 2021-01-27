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

(function () {

window.onload = () => {
	let nav_menu_button = document.getElementById('nav_menu_button');
	let header = document.getElementsByTagName('header')[0];
	let nav = document.getElementsByTagName('nav')[0];
	let html = document.getElementsByTagName('html')[0];
	let body = document.getElementsByTagName('body')[0];
	const aspectRatio = 1280.0/960.0;
	
	// const updateBG = () => html.style.backgroundSize = 
	// 	window.innerWidth / window.innerHeight < aspectRatio ? 'auto 100%' : '100% auto';
		
	// updateBG();
	
	// window.addEventListener('resize', updateBG);

	nav_menu_button.addEventListener('click', () => {

		if ( nav.style.display == 'none' || nav.style.display == '' ) {
			nav_menu_button.style.backgroundColor = 'white';
			nav_menu_button.getElementsByTagName('p')[0].style.color = 'black';
			nav.style.display = 'block';

			setTimeout(() => {
				document.getElementsByTagName("body")[0].addEventListener('click', function(e) {
					e = e || event
					let target = e.target || e.srcElement
					innerId = target.id;

					if ( innerId == 'nav_menu_button' || isDescendant(header, target) || isDescendant(nav_menu_button, target) ) {

					} else {
						nav_menu_button.style.backgroundColor = 'black';
						nav_menu_button.getElementsByTagName('p')[0].style.color = 'white';
						nav.style.display = 'none';
					}
				});
			}, 50);

		} else {
			nav_menu_button.style.backgroundColor = 'black';
			nav_menu_button.getElementsByTagName('p')[0].style.color = 'white';
			nav.style.display = 'none';
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