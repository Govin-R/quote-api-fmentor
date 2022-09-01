let advice_area = document.getElementById('advice');

async function getAdvice(){

	let request = new Request("https://api.adviceslip.com/advice");
	let responce = await fetch(request);
	let advice = await responce.json();
	advice.forEach(a=>alert(a));
	//alert(advice)
}

getAdvice();
