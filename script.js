//Make a button Clickable//
//makeMadLib 
	//1. Takes the info from the form //
	//2. craete a function that connects the strings together
	//3. make the button intiate the function
	//4. shows them in a the story div 


document.getElementById('lib-button').addEventListener('click', makeMadLib);

function makeMadLib () {
	var noun = document.getElementById('noun').value;
	var adj = document.getElementById('adjective').value;
	var person = document.getElementById('person').value;
	var madLib = person + ' ' + adj + ' ' + noun + ' ';
	return madLib

	var madLibDisplay = document.getElementById('story');
	madLibDisplay.innerText = madLib;
}

makeMadLib()
	
	

	