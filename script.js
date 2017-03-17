
function slideshow() {
  let currentImage = 0;
  $('.single').find('.slider').removeClass('active');
  $('.next-image').remove();  
  $('.slide').remove();
  $('.text').removeClass('animate');
  $('.image').removeClass('right left middle');
  
  if($('.single').hasClass('current')) {
    $('.current').find('.slider').addClass('active');
    $('<div class="slide">').appendTo('.slider.active');
  } else {
  }
  let total = $('.active .image').length;
  $('.active .image').addClass('right');

  setTimeout(function(){
    $('.active .image:first').addClass('middle').removeClass('right');
    $('.active .slide').addClass('hide');
  },30);
  
  setTimeout(function(){
    $('.menu').addClass('animate');
  },600);

  $('.next-image').click(function() {
      currentImage++;
      $('.active .image.middle').removeClass('middle').addClass('left');
      $('.active .image.left').next('.image').removeClass('right').addClass('middle');
      setTimeout(function() {
        $('.active .image.left').removeClass('left').addClass('right');
      }, 600);
      if(currentImage >= total) {
        currentImage = 0;
          $('.active .image.middle').removeClass('middle').addClass('left');
          $('.active .image:first').addClass('middle').removeClass('right');
          $('.active .image.left').next('.image').removeClass('right').addClass('middle');
      }  
      console.log(currentImage);
  });
      console.log(total);
}

function showProject() {
  let section = $('.section.full');
  let selected = $('.current');
  let number = $(selected).attr('class').split(' ')[1];
  
  let active = $('.single.'+number);

  $(section).addClass('show');
  $(active).addClass('show current');

  slideshow();

  function nextProject() {
    let current = $('.single.current');
      if($(current).next().length != 0) {
        $(current).removeClass('show current').next().addClass('show current');
        slideshow();
      } else {
        $(current).removeClass('show current');
        $('.single:first').addClass('show current');
        slideshow();
      }
      return false;
  }
   
   function prevProject() {
    let current = $('.single.current');
      if($(current).prev('.single').length != 0) {
        $(current).removeClass('show current').prev('.single').addClass('show current');  
        slideshow();
      } else {
        $(current).removeClass('show current');
        $('.single:last').addClass('show current');
        slideshow();
        return false;
    }
  }

  $('.prev').click(function() {
    prevProject();
  });

   $('.next').click(function() {
    nextProject();
  });
}

function previewProjects() {
  let menu = $('.project a');
  let project = $('.menu .project');

  $(menu).mouseenter(function(){
    $('.project').removeClass('show');
    $(this).parent(project).addClass('show');
  });

  $(menu).mouseleave(function(){
    $('.project').removeClass('show');
  });

  $(menu).click(function(){
    $(this).parent(project).addClass('current');
    let match = $(this).parent(project).attr('class').split(' ')[1];
    console.log(match);
    setTimeout(function(){
      $('.projects').hide();
      $('.background').removeClass('hide');
    }, 200);
    setTimeout(function() {
      $('.background').addClass('hide');
    },1500);
    setTimeout(function() {
      showProject();
    },1600);
  });
}

function showHomepage() {
  setTimeout(function(){
    $('.background').addClass('hide');
  }, 1000);

  setTimeout(function(){
    $('.name').addClass('animate');
  }, 1300);

  setTimeout(function(){
    $('.information').addClass('animate');
    $('.projects').show();
  }, 1500);

  setTimeout(function() {
    $('.menu').addClass('show');
    $('.text').addClass('show');
    previewProjects();
  },1700)
}

$(function(){
  $.ajax({
      type : 'POST',
      url : 'http://ws.audioscrobbler.com/2.0/',
      data : 'method=user.getrecenttracks&' +
             'limit=1&' +
             'user=Catasthrophy&' +
             'api_key=ed27efa727037b29ce3b74520e3bca20&' +
             'format=json',
      dataType : 'jsonp',
      success : function(data) {
          var html = '';
          var counter = 1;
          $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
              html += 'Now Playing: <span>' + item.name + ' - ' + item.artist['#text'] + '</span>';
            }
            counter++
           });
        $('.listening-to p').append(html);
    }
  });

  $('.hamburger').click(function() {
    $('.about').addClass('show');
    $('#container').toggleClass('blue');
    $('.line').toggleClass('blue');
    $('.background').toggleClass('hide');
    $('.projects').removeClass('show');
    $('.full').hide();
  });

  $('.details').mouseenter(function() {
  });

  $('.details').click(function() {
    $('.slide').toggleClass('hide');
    $('.text').toggleClass('animate');
  });
   
   $('.details').mouseleave(function() {
  });
  
  $('.name').click(function(){
    $('.full').removeClass('show');
    $('.projects').addClass('show');
  });

  showHomepage();

  function mobileFunction() {
    let currentImage = 0;
    if (window.matchMedia('(max-width: 760px)').matches) {
        $('.full .single').addClass('current');
        $('.single .slider').addClass('active');
        $('.active .image').addClass('right');
        $('.current .active .image:first').addClass('middle').removeClass('right');
        let total = $('.active .image').length;
        
        $('.next-image').click(function() {
          currentImage++;
          $('.active .image.middle').removeClass('middle').addClass('left');
          $('.active .image.left').next('.image').removeClass('right').addClass('middle');
          setTimeout(function() {
            $('.active .image.left').removeClass('left').addClass('right');
          }, 600);
          if(currentImage >= total) {
            currentImage = 0;
              $('.active .image.middle').removeClass('middle').addClass('left');
              $('.active .image:first').removeClass('right').addClass('middle');
              $('.active .image.left').next('.image').removeClass('right').addClass('middle');
          }  
          console.log(currentImage);
      });
      console.log('small');
    }  
  }
  $(window).resize(mobileFunction);
    mobileFunction();
});


