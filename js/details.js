// from the api https://www.openbrewerydb.org/

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const name = params.get("name");

const url = "https://api.openbrewerydb.org/breweries?by_name=" + name;

async function getBreweryByName() {
  const h1 = document.querySelector("h1");
  try {
    const response = await fetch(url);
    const result = await response.json();

    //name
    h1.innerHTML = result[0].name;

    //city
    const displayCity = document.querySelector(".city");
    displayCity.innerHTML = "<b>City</b> " + result[0].city;

    //street
    const displayStreet = document.querySelector(".street");
    displayStreet.innerHTML = "<b>Street:</b> " + result[0].street;

    //postal code
    const displayPostalCode = document.querySelector(".postal-code");
    displayPostalCode.innerHTML = "<b>Postal Code</b> " + result[0].postal_code;

    //latitude
    const displayLatitude = document.querySelector(".latitude");
    displayLatitude.innerHTML = "<b>Latitude</b> " + result[0].latitude;

    //longitude
    const displayLongitude = document.querySelector(".longitude");
    displayLongitude.innerHTML = "<b>Longitude</b> " + result[0].longitude;

    //no image to display
    const image = document.querySelector(".details-image");
    image.style.display = "none";

    console.log(result);
  } catch (error) {
    h1.innerHTML = "An error occured";
    console.log(error);
  }
}

getBreweryByName();
