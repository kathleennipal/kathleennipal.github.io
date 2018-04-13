window.onload = () => {
	let elems = document.getElementsByClassName('zoom');
	for (let i = 0; i < elems.length; i += 1){
		let src = elems[i].dataset.orig;
		elems[i].src = src;
	}
};