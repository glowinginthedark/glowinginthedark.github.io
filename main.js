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

	nav_menu_button.addEventListener('click', () => {

		if ( nav.style.display == 'none' || nav.style.display == '' ) {
			nav_menu_button.style.backgroundColor = 'black';
			nav_menu_button.style.color = 'white';
			nav.style.display = 'block';

			setTimeout(() => {
				document.getElementsByTagName("body")[0].addEventListener('click', function(e) {
					e = e || event
					let target = e.target || e.srcElement
					innerId = target.id;

					if ( innerId == 'nav_menu_button' || isDescendant(header, target) || isDescendant(nav_menu_button, target) ) {

					} else {
						nav_menu_button.style.backgroundColor = 'white';
						nav_menu_button.style.color = 'black';
						nav.style.display = 'none';
					}
				});
			}, 50);

		} else {
			nav_menu_button.style.backgroundColor = 'white';
			nav_menu_button.style.color = 'black';
			nav.style.display = 'none';
		}

	});
}

})();