        // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function toTop(){
$('html, body').animate({
scrollTop: 0
}, 1000, 'easeOutElastic');
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backtop").style.display = "block";
    } else {
        document.getElementById("backtop").style.display = "none";
    }
}

$(document).ready(function() {
       $('#backtop').click(function(){ 
          $('html, body').animate({scrollTop:0}, 'slow');
      return false;
         });
     });
