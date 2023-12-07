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
//on click function of index.html
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


// Wang  form validation of review page
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    alert("Thank you for your feedback！");
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Wang these are on click functions of info.html
var $mottoCai = $("#mottoCai");
$mottoCai.click(function(){
    alert('"Wisdom is better than gold or silver."')
})

var $mottoYang = $("#mottoYang");
$mottoYang.click(function(){
    alert('"Nobody’s enemy but his own."')
})

var $mottoJiang = $("#mottoJiang");
$mottoJiang.click(function(){
    alert('"A bad workman always blames his tools."')
})

var $mottoWang = $("#mottoWang");
$mottoWang.click(function(){
    alert('"Grasp all, lose all."')
})


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

//--game.html--//
//alert box of game.html
$(document).ready(function() {
    var path = window.location.pathname;//get the path of the page
    var page = path.substring(path.lastIndexOf('/') + 1);//get the page name
    //if the page is game.html
    if(page === "game.html" || page === "") { 
        alert("Let's play the game!");;
    }
});

// game area
$(document).ready(function () {
    var questions = [
        { question: "What is the capital of China?", choices: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"], answer: "Beijing" },
        { question: "During which dynasty was the Great Wall of China built?", choices: ["Qin", "Han", "Tang", "Ming"], answer: "Qin" },
        { question: "What is the national flower of China?", choices: ["Peony", "Chrysanthemum", "Plum Blossom", "Orchid"], answer: "Peony" },
        { question: "What is the largest city in China?", choices: ["Beijing", "Shanghai", "Guangzhou", "Chongqing"], answer: "Shanghai" },
        { question: "What is the longest river in China?", choices: ["Yangtze River", "Yellow River", "Pearl River", "Heilongjiang River"], answer: "Yangtze River" },
        { question: "What is the highest mountain in China?", choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Mount Everest" },
        { question: "What is the most populated province in China?", choices: ["Guangdong", "Shandong", "Henan", "Sichuan"], answer: "Guangdong" },
        { question: "What is the official language of China?", choices: ["Cantonese", "English", "Mandarin", "Shanghainese"], answer: "Mandarin" },
        { question: "What animal is a symbol of China?", choices: ["Dragon", "Panda", "Tiger", "Phoenix"], answer: "Dragon" },
        { question: "What is the traditional Chinese New Year also known as?", choices: ["Mid-Autumn Festival", "Dragon Boat Festival", "Qingming Festival", "Spring Festival"], answer: "Spring Festival" }
    ];
    var questionIndex = -1;  // index of the current question
    var correctCount = 0;    // number of correct answers
    function displayNextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            var question = questions[questionIndex];
            $('#question-game').text(question.question);
            $('#choices').empty();
            $.each(question.choices, function (index, choice) {
                $('#choices').append('<button class="btn btn-success m-2 choice-button">' + choice + '</button>');
            });
            updateProgressBar();
        } else {
            $('#question-game').text("Game over! " + correctCount + " / " + questions.length + " questions correct");
            $('#choices').empty();
            $('#next-question').hide();
            $('#restart-game').show();
        }
    }
    // update the progress bar
    function updateProgressBar() {
        var progress = ((questionIndex + 1) / questions.length) * 100;
        $('.progress-bar').css('width', progress + '%').attr('aria-valuenow', progress).text((questionIndex + 1) + '/' + questions.length);
    }
    // shuffle the questions
    function shuffleQuestions() {
        questions.sort(function() { return 0.5 - Math.random(); });
    }
    // start the game
    $('#start-game').click(function () {
        shuffleQuestions();
        $('#start-screen').hide();
        $('#game-screen').show();
        displayNextQuestion();
    });
    // display the next question when the "Next Question" button is clicked
    $('#next-question').click(function () {
        displayNextQuestion();
    });
    // restart the game when the "Restart Game" button is clicked
    $('#restart-game').click(function () {
        shuffleQuestions();
        questionIndex = -1;
        correctCount = 0;
        $('#next-question').show();
        $('#restart-game').hide();
        displayNextQuestion();
    });
    // check the answer when a choice is clicked
    $(document).on('click', '.choice-button', function () {
        var choice = $(this).text();
        if (choice === questions[questionIndex].answer) {
            correctCount++;
        }
        displayNextQuestion();
    });
});
    //comment area
    $('#comment-form').submit(function (event) {
        event.preventDefault();
        $('#comment-game').val(''); // clear the form
        alert('Thank you for your comment！');
    });