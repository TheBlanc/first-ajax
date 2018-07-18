document.addEventListener("DOMContentLoaded", function() {

  // Define button DOM elements
  var rootButton = document.querySelector('.root');

  var step3456 = document.querySelector('#step3456');
  var pingPongButton = document.querySelector('.pingPong');

  var step7 = document.querySelector('#step7');
  var countButton = document.querySelector('.count');

  var step8 = document.querySelector('#step8');
  var timeButton = document.querySelector('.time');

  var step9 = document.querySelector('#step9');
  var carButton = document.querySelector('.car');

  // Root AJAX call
  rootButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'get',
      dataType: 'text',
    }).done( function(resonseData) {
      // Do something with responseData if successful
    });
  });


  // Ping AJAX call
  pingPongButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'get',
      dataType: 'text',

    }).done( function(responseData) {
      console.log(responseData);
      var pingResponse = document.createElement('p');
      pingResponse.innerHTML = responseData;
      step3456.appendChild(pingResponse);

    }).fail( function(responseData) {
      console.log(responseData);
      var pingResponse = document.createElement('p');
      pingResponse.innerHTML = "Something went wrong!"
      step3456.appendChild(pingResponse);

    }).always( function() {
      console.log('Hey the request finished!');
    });
  });

  // Count AJAX call
  countButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'get',
      dataType: 'text',

    }).done( function(responseData) {
      console.log(responseData);
      var countResponse = document.createElement('p');
      countResponse.innerHTML = responseData;
      step7.appendChild(countResponse);

    }).fail( function(responseData) {
        var countResponse = document.createElement('p');
        countResponse.innerHTML = "Something went wrong!";
        step7.appendChild(countResponse);

    });

  });


  // Time with data AJAX call

  timeButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'get',
      data: { timezone: 'Pacific/Honolulu'},
      dataType: 'text',

    }).done( function(responseData) {
      console.log(responseData);
      var timeResponse = document.createElement('p');
      timeResponse.innerHTML = responseData;
      step8.appendChild(timeResponse);

    }).fail( function(responseData) {
        var timeResponse = document.createElement('p');
        timeResponse.innerHTML = "Something went wrong!";
        step8.appendChild(timeResponse);

    });

  });

  carButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'get',
      dataType: 'html',

    }).done( function(responseData) {
      console.log(responseData);
      var carResponse = document.createElement('ul');
      carResponse.innerHTML = responseData;
      step9.appendChild(carResponse);

    }).fail( function(responseData) {
        var carResponse = document.createElement('ul');
        carResponse.setAttribute('id', 'carItem')
        carResponse.innerHTML = "Something went wrong!";
        step9.appendChild(carResponse);

    });

  });




});
