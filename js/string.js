
        document.querySelector('#copyright').textContent = new Date().getFullYear();

        function storyComplete() {
	// INPUT
	firstname = document.querySelector('#firstname').value;
        fruit = document.querySelector('#fruit').value;
        animal1 = document.querySelector('#animal1').value;
        animal2 = document.querySelector('#animal2').value;

	// PROCESSING
	 
	
	//OUTPUT - Example output: "And it came to pass that the people of ___ did till the land, and raise all manner of ___, and flocks of herds, and flocks of all manner of ___ of every kind, and ___."

	 document.querySelector("#output").innerHTML = `And it came to pass that the people of ${firstname} did till the land, and raise all manner of ${fruit}, and flocks of herds, and flocks of all manner of ${animal1} of every kind, and ${animal2}.`
        }
