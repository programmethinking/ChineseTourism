//--index.html--//
//this is a alert box of index.html
$(document).ready(function() {
    var path = window.location.pathname;//get the path of the page
    var page = path.substring(path.lastIndexOf('/') + 1);//get the page name
    //if the page is index.html
    if(page === "index.html" || page === "") { 
        alert("Welcome to China!");;
    }
});
//this is on click function of index.html
function showText(image) {
    var text = document.getElementById('text');
    switch(image) {
        case 'xinjiang':
            text.innerHTML = 'XinJiang';
            break;
        case 'qinghai':
            text.innerHTML = 'QingHai';
            break;
        case 'hnu':
            text.innerHTML = 'Hunan University';
            break;
        case 'yuelu':
            text.innerHTML = ' Yuelu Mountain';
            break;
        case 'shenzhen':
            text.innerHTML = 'ShenZhen';
            break;
        case 'wusong':
            text.innerHTML = 'WuSong';
            break;
        default:
            text.innerHTML = '';
    }
}


//--contact.html--//
// hide and show the map
$(document).ready(function(){
    $("#hide").click(function(){
      $(".contact-map").hide();
    });
    $("#show").click(function(){
      $(".contact-map").show();
    });
  });

//--questions.html--//
// feedback-form
$(document).ready(function() {
  $('#feedback-form').submit(function(event) {
    event.preventDefault(); 
    var userQuestion = $('#question-input').val(); 
    if (userQuestion.length === 0) {
      // If the input is empty, a message is displayed
      $('#form-response-message').text('Please enter the question.').css('color', 'red');
      return;
    }
    $('#form-response-message').text('Thank you for your submission and we will get back to you as soon as possible.').css('color', 'green');
    $('#question-input').val('');
  });
});

