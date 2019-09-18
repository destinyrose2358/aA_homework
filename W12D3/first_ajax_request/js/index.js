console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success: function (data) {
    console.log(data.weather);
  }
});

// Add another console log here, outside your AJAX request
console.log("I'm out of sync!!!!");

/*
1) The request gets sent immediately
2) The response comes back whenever the server gets us a response
3) There are currently clear skies in New York.
4) The page did not refresh after the initial loading
5) In order to use different HTTP methods we just need to change the type in our options object
*/
