'use strict';
// create a function that logs that the app loaded to the console and calls the submit

// prints out in multiples of 3 unless input is 3

function displayResults(responseJson) {
  console.log(responseJson);
  // map over items in the array to create an array of image tags
  const images = responseJson.message.map(function(link) {
    return `<img src="${link}" class="results-img">`
  });

  //replace the existing image with the new one
  $('.results-img').replaceWith(images);
  //display the results section
  $('.results').removeClass('hidden');
}

// create a function that will GET the endpoint url and display to the user
function getDogImage(count) {
  fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


// create a function that handles the submit button and calls the image
function handleSubmit() {
  $('form').submit(function(event) {
    event.preventDefault();
    const count= $(this).find("[name='count']").val();
    getDogImage(count);
    $(this).find("[name='count']").val('');
  }
  );
}

$(function() {
  console.log('App loaded, waiting for submit!');
  handleSubmit();
});

