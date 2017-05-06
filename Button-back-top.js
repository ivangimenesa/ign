        // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backtop").style.display = "block";
    } else {
        document.getElementById("backtop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr(&quot;href&quot;);if($(window).scrollTop()!=&quot;0&quot;){$(this).fadeIn(&quot;slow&quot;)}
var   scrollDiv=$(this);$(window).scroll(function(){
      if($(window).scrollTop()==&quot;0&quot {$(scrollDiv).fadeOut(&quot;slow&quot;)}
      else{$(scrollDiv).fadeIn(&quot;slow&quot;)}});$(this).click(function(){$(&quot;html,  body&quot;).animate({scrollTop:0},&quot;slow&quot;)})}});
  $(function() {   
                $(&quot;#backtop&quot;).scrollToTop();    
            }); 
