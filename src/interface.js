$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.powerSaveOn();
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.powerSaveOff();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').css("color", thermostat.colour);
  }


  $('#select-city').submit(function(event) {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.
    event.preventDefault();

    var city = $('#current-city').val();

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=f46b9c5aef58799f2f61b6c7f003f5e8',
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#current-city').val(),
      },
      // work with the response
      success: function (data) {
        $('#current-temp').text(data.main.temp);
      }
    });
  });

  // $('#select-city').submit(function(event) {
  //   event.preventDefault();
  //   var city = $('#current-city').val();
  //   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=f46b9c5aef58799f2f61b6c7f003f5e8', function(data) {
  //     $('#current-temp').text(data.main.temp);
  //   });
  //
  // });

});
