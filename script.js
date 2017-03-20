function setupProject() {
  let section = $('.section.full');
  let selected = $('.current');
  let number = $(selected).attr('class').split(' ')[1];
  
  let active = $('.single.'+number);

  $(section).addClass('show');
  $(active).addClass('show current');

  showProject();
}

function showMobile() {
  let section = $('.section.full');
  let selected = $('.current');
  let number = $(selected).attr('class').split(' ')[1];
  
  let active = $('.single.'+number);

  $(section).addClass('show');
  $(active).addClass('show current');

  if($('.single').hasClass('current')) {
    $('.current').find('.slider').addClass('active');

    setTimeout(function(){
      $('.active .image').addClass('show');
      $('.current .text').addClass('animate');
    },30);
  }
}

function showProject() {
  if($('.single').hasClass('current')) {
    $('.current').find('.slider').addClass('active');
    $('<div class="slide"></div><div class="next-image"></div>').appendTo('.slider.active');

    setTimeout(function(){
      $('.active .image:first').addClass('show');
      $('.active .slide').addClass('hide');
    },30);
    
    setTimeout(function(){
      $('.menu').addClass('animate');
    },600);
  } else {
  }
  slideshow();
}

function slideshow() {
  let currentImage = 0;  
  let total = $('.active .image').length;

  $('.next-image').click(function() {
      currentImage++;
      $('.active .image.show').removeClass('show').next('.image').addClass('show');
      if(currentImage >= total) {
        currentImage = 0;
          $('.active .image.show').removeClass('show');
          $('.active .image:first').addClass('show');
          $('.active .image.left').next('.image').removeClass('right').addClass('middle');
      }  
      console.log(currentImage);
  });
      console.log(total);
}


function nextProject() {
  let current = $('.single.current');
    if($(current).next().length != 0) {
      $(current).find('.slider').removeClass('active');
      $(current).find('.slider .image').removeClass('show');
      $(current).find('.next-image .slide').remove();
      $(current).removeClass('show current').next().addClass('show current');
      showProject();
    } else {
      $(current).removeClass('show current');
      $(current).find('.slider').removeClass('active');
      $(current).find('.next-image .slide').remove();
      $('.single:first').addClass('show current');
      showProject();
    }
    return false;
}
   
function prevProject() {
  let current = $('.single.current');
    if($(current).prev('.single').length != 0) {
      $(current).find('.slider .image').removeClass('show');
      $(current).find('.slider').removeClass('active');
      $(current).find('.next-image .slide').remove();
      $(current).removeClass('show current').prev('.single').addClass('show current');  
      showProject();
    } else {
      $(current).removeClass('show current');
      $(current).find('.slider').removeClass('active');
      $(current).find('.next-image .slide').remove();
      $('.single:last').addClass('show current');
      showProject();
      return false;
  }
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
      $('.projects').removeClass('show');
      $('.background').removeClass('hide');
    }, 200);
    setTimeout(function() {
      $('.background').addClass('hide');
    },1500);
    setTimeout(function() {
      setupProject();
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
    $('.projects').addClass('show');
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
    $('.about').toggleClass('show');
    $('#container').toggleClass('blue');
    $('.line').toggleClass('blue');
    $('.background').toggleClass('hide');
    $('.projects').toggleClass('show');
    $('.full').removeClass('show');
  });

  $('.details').click(function() {
    $('.slide').toggleClass('hide');
    $('.text').toggleClass('animate');
  });
   
  $('.details').mouseleave(function() {
  });
  
  $('.name').click(function(){
    $('.full').removeClass('show');
  });

  showHomepage();

  $('.prev').click(function() {
    prevProject();
  });

   $('.next').click(function() {
    nextProject();
  });

  function mobileFunction() {
    if (window.matchMedia('(max-width: 760px)').matches) {
        let project = $('.menu .project');
        $(project).click(function(){
          $(this).addClass('current');
          let match = $(this).attr('class').split(' ')[1];
          console.log(match);
          setTimeout(function(){
            $('.projects').hide();
            $('.name').hide();
            $('.information').hide();
            $('.background').removeClass('hide');
          }, 200);
          setTimeout(function() {
            $('.background').addClass('hide');
          },1500);
          setTimeout(function() {
            showMobile();
          },1600);
  
    });
  }
}
  $(window).resize(mobileFunction);
    mobileFunction();
});


