// const APS = "APS Behand hostel";

// async function fetchData() {
//   try {
//     let response = await fetch(`https://goweather.herokuapp.com/weather/${APS}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     let weatherData = await response.json();
//     console.log(weatherData);
//     displayWeatherInfo(weatherData, '.box');
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// }

// fetchData();

// function displayWeatherInfo(weatherData, boxSelector) {
//   // Assuming you have a div with the specified class
//   let box1 = document.querySelector(".box");

//   // Display weather information in the box
//   box1.innerHTML = `
//     <p>Temperature: ${weatherData.temperature}</p>
//     <p>Wind: ${weatherData.wind}</p>
//     <p>Humidity: ${weatherData.humidity}</p>
//   `;
// }



// const place2 = "kahuta";
// async function fetchData1() {
//   try {
//     let response = await fetch(`https://goweather.herokuapp.com/weather/${place2}`);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     let weatherData = await response.json();
//     console.log(weatherData);
//     displayWeatherInfo(weatherData, '.box');
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// }

// fetchData1();

// function displayWeatherInfo(weatherData, boxSelector) {
//   // Assuming you have a div with the specified class
//   let box1 = document.querySelector(".box1");

//   // Display weather information in the box
//   box1.innerHTML = `
//     <p>Temperature: ${weatherData.temperature}</p>
//     <p>Wind: ${weatherData.wind}</p>
//     <p>Humidity: ${weatherData.humidity}</p>
//   `;
// }









async function fetchData() {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.627027909492504&lon=73.5427638540614&appid=8d80d75d16721bb554ca8db34eef5902`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let weatherData = await response.json();
    console.log(weatherData);
    displayWeatherInfo(weatherData, '.box');
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();

function displayWeatherInfo(weatherData, boxSelector) {
  let box = document.querySelector(".box");

  // Access the correct properties from the OpenWeatherMap API response
  const temperature = weatherData.main.temp;
  const wind = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;

  // Display weather information in the box
  box.innerHTML = `
    <p>Temperature: ${temperature}</p>
    <p>Wind: ${wind}</p>
    <p>Humidity: ${humidity}</p>
  `;
}

const place2 = "kahuta";
async function fetchData1() {
  try {
    let response = await fetch(`https://goweather.herokuapp.com/weather/${place2}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let weatherData = await response.json();
    console.log(weatherData);
    displayWeatherInfo1(weatherData, '.box1'); // Use a separate display function
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData1();

function displayWeatherInfo1(weatherData, boxSelector) {
  let box = document.querySelector(".box1");

  // Access the correct properties from the response (adjust based on the actual response structure)
  const temperature = weatherData.temperature;
  const wind = weatherData.wind;
  const humidity = weatherData.humidity;

  // Display weather information in the box
  box.innerHTML = `
    <p>Temperature: ${temperature}</p>
    <p>Wind: ${wind}</p>
    <p>Humidity: ${humidity}</p>
  `;
}
