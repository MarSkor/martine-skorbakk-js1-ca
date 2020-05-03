// from the api https://www.openbrewerydb.org/

async function fetchBreweries() {
  try {
    const response = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await response.json();
    displayBrewery(breweries);

    const errorHeading = document.querySelector("h1");
  } catch (error) {
    errorHeading.innerHTML = "An error occured";
    console.log(error);
  }
}
fetchBreweries();

function displayBrewery(breweries) {
  console.log(breweries);
  const heading = document.querySelector("h1");
  heading.innerHTML = "Breweries in USA";

  const breweriesContainer = document.querySelector(".results");
  let html = "";
  for (let i = 0; i < breweries.length; i++) {
    html += `<div class="col-sm-6">
              <div class="card">
                <h4>${breweries[i].name}</h4>
                <p><b>Brewery type </b>${breweries[i].brewery_type}</p>
                <p><b>Country </b>${breweries[i].country}</p>
                <p><b>State </b>${breweries[i].state}</p>
                <p><b>Website: </b> <a href="${breweries[i].website_url}">${breweries[i].website_url}</a></p>
                <a class="btn btn-primary" href="details.html?name=${breweries[i].name}">Details</a>
              </div>
            </div>`;
  }
  breweriesContainer.innerHTML = html;
}
