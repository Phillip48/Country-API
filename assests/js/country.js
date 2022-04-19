var countryInfo = [];

var submitBtn = document.getElementById("Submit-btn");
var inputArea = document.getElementById("Search-box");
let countryFlagEl = document.getElementById('country-flag')

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
        

        // document create element - delete img tag in html 
        $("#country-flag-div").append(countryFlag);
        // No img replace with something
        console.log(countryFlag);
        // if (!image_url)
        //   image_url =
        //     "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

        //Var to add pulled elements to the page

        let countryName = document.getElementById('display-country-info');
        countryName.textcontent = data[0].name.common;
        // console.log(countryName);
        // let population = ;
        // let capital = ;
        // let continents = ;
        // let currencies = ;

        var newBox = `
            <div class ="new-country-info">
                <div class="new-country-text">
                    <h1>Country: ${countryName}</h1>
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
