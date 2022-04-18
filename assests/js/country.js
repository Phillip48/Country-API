var countryInfo = [];

var submitBtn = document.getElementById("Submit-btn");
var inputArea = document.getElementById("Search-box");

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
      infoArray = data.infoArray;
      for (let i = 0; i < infoArray; i++) {
        let { name } = data.infoArray[i];
        var countryFlag = flags.png;
        // No img replace with something
        if (!image_url)
          image_url =
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
        //Var to add pulled elements to the page
        //rename ${}
        var newBox = `
            <div class ="new-country-info">
                <div class="new-country-text">
                    <h1>Country: ${name.common}</h1>
                    <p>Population: ${population} </p>
                    <p>Capital: ${capital}  </p>
                    <p>Continent: ${continents}  </p>
                    <p>Currencies: ${currencies}  </p>
                </div>
            </div>
        `;
        $("#display-country-info").append(newBox);
        $("#country-flag").append(countryFlag);
        // console.log(infoArray[name]);
      }
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
