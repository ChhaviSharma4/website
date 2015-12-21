$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		
	},3000);



function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
  
$("block").click(function(){
	$("block").addClass("fall");
});


$("#ball").click(function(){
        $("#ball").animate({
            height: '200px',
            width: '200px'
        });

    });

$("#b1").click(function(){
        $("#b1").animate({
            height: '200px',
            width: '200px'
        });


    });
$("#b2").click(function(){
        $("#b2").animate({
            height: '200px',
            width: '250px'
        });

    });
$("#b3").click(function(){
        $("#b3").animate({
            height: '200px',
            width: '200px'
        });

    });

$("#b5").click(function(){
        $("#b5").animate({
            height: '200px',
            width: '200px'
        });

    });
$("#b4").click(function(){
        $("#b4").animate({
            height: '200px',
            width: '200px'
        });

    });


$("#b6").click(function(){
        $("#b6").animate({
            height: '200px',
            width: '200px'
        });


    });
$("#b7").click(function(){
        $("#b7").animate({
            height: '200px',
            width: '250px'
        });

    });
$("#b8").click(function(){
        $("#b8").animate({
            height: '200px',
            width: '200px'
        });

    });


 });
