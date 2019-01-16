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
      url: `http://api.giphy.com/v1/gifs/search?q=${userGIF}&api_key=HJqZrjEleqITeKjpInZ3CFkyLKdaWYdY&limit=2`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let GIFurl = response.data[0].images.original.url
        $('.GIFpic').prepend(`<img src=${GIFurl}>`);

        $('.GIFtext').text(`cool`);
        console.log(response)
        console.log(response.data[0].images.original.url)
        console.log(response.data[1].images.original.url)
      },
      error: function() {
        $('#GIFerrors').text("There was an error processing your request. Please try again.");
      }
    });
  });




});
