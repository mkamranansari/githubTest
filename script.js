function click(event){
	document.write("Clicked :" + event.target);
}

document.querySelector("button")
	.addEventListener('click', click);