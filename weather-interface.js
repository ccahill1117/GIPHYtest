$(document).ready(function() {

  $('#weatherLocation').click(function() {
     let city = $('#location').val();
     $('#location').val("");
     $.ajax({
       url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57a2e76a6093ce56d6a4adb5201eeefd`,
       type: 'GET',
       data: {
         format: 'json'
       },
       success: function(response) {
         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
       },
       error: function() {
         $('#errors').text("There was an error processing your request. Please try again.");
       }
     });
   });

  $('#gifLocation').click(function() {
    let userGIF = $('#searchGIF').val();
    console.log(userGIF);
    $('#search').val(" ");
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=${userGIF}&api_key=HJqZrjEleqITeKjpInZ3CFkyLKdaWYdY&limit=1`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.GIFpic').prepend();
        $('.GIFtext').text(`cool`);
        console.log(response)
      },
      error: function() {
        $('#GIFerrors').text("There was an error processing your request. Please try again.");
      }
    });
  });




});
