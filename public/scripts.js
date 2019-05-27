document.addEventListener('DOMContentLoaded',()=>{

	let productElements = document.querySelectorAll('h2');
	console.log(productElements);
	productElements.forEach((productElement)=>{
		productElement.addEventListener('click',(event)=>{
			console.log(event.target);
		})
	})
});