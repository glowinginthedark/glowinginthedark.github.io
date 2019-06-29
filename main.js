(function () {

window.onload = () => {
	let nav_menu_button = document.getElementById('nav_menu_button');
	let nav = document.getElementsByTagName('nav')[0];

	nav_menu_button.addEventListener('click', () => {

		if ( nav.style.display == 'none' || nav.style.display == '' ) {
			nav.style.display = 'block';
		} else {
			nav.style.display = 'none';
		}

	});
}

})();