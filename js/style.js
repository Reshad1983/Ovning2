	var bool = true;
	var toggleText = function(){
		if(bool === true){
			document.getElementById("information").innerHTML = "Jag heter Reshad Ahmadi, " +
			"30 år gammal, gift och ett femårig dotter. " +
			"Jag läste Mekatronikingenjör och därefter valde" +
			"Webbprogrammering som en fristende kurs.";	
			bool = !bool;	
		}
		else{
			document.getElementById("information").innerHTML = "";
			bool = !bool;
		}
		
	};