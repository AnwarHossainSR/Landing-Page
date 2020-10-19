const items = document.querySelectorAll('.accordion a');
function accordionToggoler(){
	this.classList.toggle('active');
	this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click',accordionToggoler));