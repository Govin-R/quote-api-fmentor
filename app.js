let advice_area = document.getElementById('advice');
let number= document.getElementById('num');
async function getAdvice(){

	let request = new Request("https://api.adviceslip.com/advice");
	let responce = await fetch(request);
	let advice = await responce.json();
	
  console.log(advice.slip.advice)
  advice_area.innerText = advice.slip.advice;
  number.innerText=advice.slip.id;
}

getAdvice();
