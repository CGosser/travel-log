function destination(country, city, landmarks, time, note) {
  this.country = country;
  this.city = city;
  this.landmarks = landmarks;
  this.time = time;
  this.note = note;
  console.log(this.note)
}

$(document).ready(function() {
  $("#placeForm").submit(function(event) {
    event.preventDefault();
    var inputsHandler = new destination(
    $("input#country-visited").val(),
    $("input#city-visited").val(),
    $("input#landmarks-visited").val(),
    $("input#time-visited").val(),
    $("input#img-link").val());
    console.log(inputsHandler);
    $(".userDisplay").append('<img class="plorp" src="' + inputsHandler.note + '">');

    $(".plorp").last().click(function(){
      $(".locationDetail").text("My favorite country is " + inputsHandler.country + ". The coolest place in it was " + inputsHandler.city + ". I loved seeing the world-famous " + inputsHandler.landmarks + ". I sure do miss going there back on " + inputsHandler.time + ".");
    });
  });

});
