function show_menu() {
	let menu = document.getElementsByClassName("popup_menu")[0];
	console.log(menu.style.display);
	if (menu.style.display === "" || menu.style.display === "none") {
		menu.style.display = "block";
	}
}

function hide_menu(){
	let menu = document.getElementsByClassName("popup_menu")[0];
	console.log(menu.style.display);
	if (menu.style.display === "block") {
		menu.style.display = "none";
	}
}