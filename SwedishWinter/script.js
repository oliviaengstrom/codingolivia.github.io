

//java array-->
		var swedishcities = [
			{
				name: 'Stockholm\ns',
				temp: 6 //int=siffror//
			},
			
			{
				name: 'Uppsala\n',
				temp: 8
				//int=siffror//
			},

			{
				name: 'Malmö\n',
				temp: 13 //int=siffror//
			},

			{
				name: 'Gothenburg\n',
				temp: 10 //int=siffror//
			},

			{
				name: 'Västerås\n',
				temp: 7 //int=siffror//
			}

		];
		
//java array-->
//displaying java array in html-->

		var displayweather = document.getElementById('weather'); 

		for (var i = 0; i<5; i = i + 1) {
				var div = document.createElement('div');
				div.append(swedishcities[i].name);
				div.append(swedishcities[i].temp);
				displayweather.append(div);

		}
//displaying java array in html-->
		

	

