var events = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019",
  },
  ];

//   build dropdown
function buildDropDown {
    let dropdownMenu = document.getElementById('eventDropDown');
    dropdownMenu.innerHTML = '';

    let currentEvents = events; // TODO get these from storage

    // let cityNames = currentEvents.map(
    //     function (event) {
    //         return event.city
    //     }
    // ) fat arrow function below is shorte/easier to read

    let cityNames = currentEvents.map(event => event.city);

    letcitiesSet = new Set(cityNames);

    let distinctCities = [...citiesSet]; //['Charlotte', 'San Diego', 'New York']

    const dropdownTemplate = document.getElementById('dropdownItemTemplate');

    // copy the template
    let dropdownItemNode = document.importNode( true);

    //make our changes
    let dropdownItemLink = dropdownItemNode.querySelector('a');
    dropdownItemLink.innerText = 'All Cities';
    dropdownItemLink.setAttribute('data-string', 'All');

    // add our copy to page
    dropdownMenu.appendChild(dropdownItemNode);

    for (let i = 0; i < distinctCities.length; i += 1) {
        // get the city by name
        let cityName = distinctCities[i];

        let itemNode = document.importNode('dropdownItemTemplate');
        let anchorTag = ItemNode.querySelector('a');
        dropdownItemLink.innerText = cityName;
        dropdownItemLink.setAttribute('data-string', 'cityName');

        //generate a dropdown element
        // add our copy to page
    dropdownMenu.appendChild(itemNode);
    }

}



