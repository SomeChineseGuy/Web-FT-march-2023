const url = 'https://randombig.cat/roar.json';

const apiKEY = process.env.weatherAPI;

const weatherDataTemp = (data) => {
  return `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <h1>The city is: ${data.name}</h1>
    <h2>The current weather is: ${data.weather[0].main}, ${data.weather[0].description}</h2>
    <h3>The current temp is ${data.main.temp}, with a high of ${data.main.temp_max} and a low of ${data.main.temp_min}
  `
}

const showWeatherData = (data) => {
  $('.results')
  .html(weatherDataTemp(data))
  // .append('<h1>The city is:' + data.name + '')
  // .append('<h2>The current weather is: ' + data.weather[0].main + ', ' + data.weather[0].description + '</h2>')
}

$(document).ready(function () {
  // Target 
  // Event listener
  // Effect

  // $('.btn').on('click', function() {
  //   // Adding Hardcoded html data
  //   // $('.results').append('<p>This is a test </p>')
  //   $.get(url, function(data) {

  //     console.log(data.url);
  //     $('.results').html(`<img class="image" src="${data.url}"/>`)
  //   })
  // })

  // // Make an api request without the user triggering an event
  // $.get(url, function(data) {
  //   console.log(data.url);
  //    $('.results').html(`<img class="image" src="${data.url}"/>`)
  // })

  $('.weather-form').on('submit', function (event) {
    // prevent the page from refreshing
    event.preventDefault();
    const input = $('.user-input').val()
    console.log(input);
    $.ajax({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input}&appid=${apiKEY}`,

    })
    .then(function(data) {
      showWeatherData(data)
    })
    .catch(function (err) {
      console.log(err);
    })
  })


})