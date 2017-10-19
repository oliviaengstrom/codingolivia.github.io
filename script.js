
	
//java array-->
		var swedishcities = [
			{
				name: 'Stockholm',
				temp: 6 //int=siffror//
			},
			
			{
				name: 'Uppsala',
				temp: 8
				//int=siffror//
			},

			{
				name: 'Malmö',
				temp: 13 //int=siffror//
			},

			{
				name: 'Gothenburg',
				temp: 10 //int=siffror//
			},

			{
				name: 'Västerås',
				temp: 7 //int=siffror//
			}

		];
		
//java array-->

		var displayweather = document.getElementById('weather'); 

		for (var i = 0; i<5; i = i + 1) {
				var div = document.createElement('div');
				div.append(swedishcities[i].name);
				div.append(swedishcities[i].temp);
				displayweather.append(div);

		}

	

