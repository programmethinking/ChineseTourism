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


