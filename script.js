
let inputScreen = document.querySelector('#input');

let submitButton = document.querySelector('#submit');

let symbols = document.querySelector('#symbol');



let outputScreen = document.querySelector('.output');

const getWeather=(inputScreen)=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '49611c0ce3msh3e8a0ae209d8e0bp1a1d0fjsn471e7a677344',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+inputScreen , options)
	.then(response => response.json())
	.then((response) =>{



		outputScreen.innerHTML=response.temp;

		
		symbols.style.display = 'block';

		
		console.log(response);


	}) 


	
	.catch(err => console.error(err));


};




submitButton.addEventListener('click', (e)=>{

	e.preventDefault();

	
	getWeather(inputScreen.value);


	if(inputScreen=='Enter The Location'){

         outputScreen.value = " ";

	}

	
	

    
});



