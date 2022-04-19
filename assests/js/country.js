var countryInfo = [];

var submitBtn = document.getElementById("Submit-btn");
var inputArea = document.getElementById("Search-box");
let countryImg = document.getElementById('country-img')

// Function to fetch data from Country API
function fetchApiData() {
  var userCountry = inputArea.value.trim();
  var restUrl = `https://restcountries.com/v3.1/name/${userCountry}?fullText=true`;

  fetch(restUrl)
    .then(function (response) {
      return response.json(); 
    })
    .then(function (data) {
      console.log(data);
      // Added elements onto page

      let infoArray = [];
      infoArray = data.infoArray;
        // let { name } = data.infoArray[i];
        let countryFlag = document.createElement('img');
        countryFlag = data[0].flags.png;
        
        // No img replace with something
        if (!countryFlag)
          countryFlag =
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

        //Var to add pulled elements to the page

        let countryName = document.getElementById('display-country-info');
        countryName = data[0].name.common;

        let population = document.getElementById('display-country-info');
        population =  JSON.stringify(data[0].population);

        let capital = document.getElementById('display-country-info');
        capital = data[0].capital;

        let continents = document.getElementById('display-country-info');
        continents = data[0].continents;

        let currencies = document.getElementById('display-country-info');
        currencies = JSON.stringify(data[0].currencies.name);

        var flagBox = `
        <img src="${countryFlag}" alt="flag">
        `;
        $("#country-flag-div").append(flagBox);

        var newBox = `
            <div class ="new-country-info">
                <div class="new-country-text">
                    <h4>Country: ${userCountry}</h4>
                    <p>Population: ${population} </p>
                    <p>Capital: ${capital}  </p>
                    <p>Continent: ${continents}  </p>
                    <p>Currencies: ${currencies}  </p>
                </div>
            </div>
        `;
        $("#display-country-info").append(newBox);
        
        // console.log(countryFlag);
        // console.log(infoArray[name]);
      //console log error if it happens
    })
    .catch((error) => console.log("Error fetchin Yelp data:", error));
}

function userResponse(event) {
  event.preventDefault();
  var userValue = inputArea.value.trim();

  // if statement to make sure user inputs text

  if (userValue === "") {
    window.alert("Please enter a country");
  } else {
    fetchApiData(userValue);
  }
}

submitBtn.addEventListener("click", userResponse);
