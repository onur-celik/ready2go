// GLOBALS

// DOCUMENT READY

// FUNCTIONS

function appear()
{
    $('html').animate({opacity: 1},1000);
}

function goToPage(url)
{   
    $('html').fadeOut(300,function(){
        location.href = url;
    });
}

$(function()
{
    // this is how to use the "jquery.transit plugin"
    $('div#box').hover(function()
    {
        $(this).stop().transition({ rotate: 20, skewX : 10 });
    }, function(){
        $(this).stop().transition({ rotate: '0deg', skewX : '0deg' });
    });
    
    var console = $('#typist').typist({
        height: 120,
        width: 680
      });
    
    
    // this is how to use the "jquery.typewriter plugin"
    var play = function() {
        console.html('');
        console.typist('prompt')
          .typist('type','ready2Go')
          .typist('wait',2000)
          .typist('speed','fast')
          .typist('echo','Starting a new web project?')
          .typist('wait',2000)
          .typist('echo','Just download ready2Go from it\'s gitHub page..')
          .typist('echo','It has everthing you need!.')
          .typist('echo','');
        console.typist('wait',400)
          .typist('speed','slow')
          .typist('prompt')
          .typist('wait',1000)
          .typist('type','For more information')
          .typist('echo','')
          .typist('wait',800)
          .typist('speed','fast')
          .typist('echo','see the README file')
          .delay(1800)
          .fadeTo(200, 0.01, function() {
            $(this).html('<p>It\'ll be that simple<br />ready2Go<' + '/p>' +
              '<a id="replay">Replay<' + '/a>')
            .find('#replay').click(function() {
              play();
            });
            $(this).fadeTo(200, 1);
          });
      };
      play();
    
    
}); // document ready functions