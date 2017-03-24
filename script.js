function setupProject() {
  let section = $('.section.full');
  let selected = $('.current');
  let number = $(selected).attr('class').split(' ')[1];
  
  let active = $('.single.'+number);

  $(section).addClass('show');
  $(active).addClass('show current');
  let mobile = window.matchMedia('(max-width: 740px)');
  
  if (mobile.matches) {
      showMobile();
      console.log("hmm");
    } else {
      showProject();
      console.log('yo');
    }
}

// function setupMobile() {
//     let section = $('.section.full');
//     let selected = $('.current');
//     let number = $(selected).attr('class').split(' ')[1];
    
//     let active = $('.single.'+number);

//     $(section).addClass('show');
//     $(active).addClass('show current');
//     showMobile();
// }

function showMobile() {
  if($('.single').hasClass('current')) {
    $('.current').find('.slider').addClass('active');
    setTimeout(function(){
      $('.active .image').addClass('show');
      $('.current .text').addClass('animate');
      $('.navigation').addClass('animate');
    },100);
  }
}

function showProject() {
  if($('.single').hasClass('current')) {
    $('.current').find('.slider').addClass('active');
    $('.active .image.show').removeClass('show');
    if($('.active .next-image').length === 0) {
      $('<div class="slide"></div><div class="next-image"></div>').appendTo('.active');
    } else {
     console.log('nah its here');
    }
    setTimeout(function(){
      $('.active .image:first').addClass('show');
      $('.active .slide').addClass('hide');
    },30);
    setTimeout(function(){
      $('.navigation').addClass('animate');
        slideshow();
    },600);
  } else {
  }
}

function slideshow() {
  let currentImage = 0;  
  let total = $('.active .image').length;
  let nextButton = $('.active .next-image');
  $(nextButton).click(function() {
      currentImage++;
      $('.active .image.show').removeClass('show').next('.image').addClass('show');
      if(currentImage >= total) {
        currentImage = 0;
          $('.active .image.show').removeClass('show');
          $('.active .image:first').addClass('show');
      }  
      console.log(currentImage);
  });
      console.log(total);
}


function nextProject() {
  let current = $('.single.current');
    if($(current).next().length != 0) {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).find('.slider .image').removeClass('show');
      $(current).find('.slider .next-image').remove();
      $(current).find('.slider .slide').remove();
      $(current).removeClass('show current').next().addClass('show current');
      showProject();
    } else {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).removeClass('show current');
      $(current).find('.slider .next-image').remove();
      $(current).find('.slider .slide').remove();
      $('.single:first').addClass('show current');
      showProject();
    }
    return false;
}

function nextMobile() {
  $('.next-image').remove();
  $('.slide').remove();
  let current = $('.single.current');
    if($(current).next().length != 0) {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).find('.slider .image').removeClass('show');
      $(current).removeClass('show current').next().addClass('show current');
      showMobile();
    } else {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).removeClass('show current');
      $('.single:first').addClass('show current');
      showMobile();
    }
    return false;
}
   
function prevProject() {
  let current = $('.single.current');
    if($(current).prev('.single').length != 0) {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider .image').removeClass('show');
      $(current).find('.slider').removeClass('active');
       $(current).find('.slider .next-image').remove();
      $(current).find('.slider .slide').remove();
      $(current).removeClass('show current').prev('.single').addClass('show current');  
      showProject();
    } else {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).removeClass('show current');
       $(current).find('.slider .next-image').remove();
      $(current).find('.slider .slide').remove();
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

function showAbout() {
  if($('.full').hasClass('show')) {
      $('.slide').removeClass('hide');
      $('.text').removeClass('animate');
    
    setTimeout(function(){
      $('.navigation').removeClass('animate');
      $('#container').addClass('blue');
      $('.line').addClass('blue');
      $('.background').removeClass('hide'); 
    },290);
    setTimeout(function(){
      $('.about').addClass('show');
    },600);
    setTimeout(function(){
      $('.biography').addClass('show');
      $('.about h2').addClass('show');
      $('.contact').addClass('show');
    },700);

  } else if ($('.projects').hasClass('show')) {
    setTimeout(function(){
      $('#container').addClass('blue');
      $('.line').addClass('blue');
      $('.background').removeClass('hide');
      let mobile = window.matchMedia('(max-width: 740px)');
      if (mobile.matches) {
        $('.projects').removeClass('show');
      } else {
      }
    },100);
    setTimeout(function(){
      $('.about').addClass('show');
    },400);
    setTimeout(function(){
      $('.biography').addClass('show');
      $('.about h2').addClass('show');
      $('.contact').addClass('show');
    },500);
  }
}

function hideAbout() {
  let mobile = window.matchMedia('(max-width: 740px)');
  $('.biography').removeClass('show');
  $('.about h2').removeClass('show');
  $('.about .contact').removeClass('show');
  
  setTimeout(function(){
    $('#container').removeClass('blue');
    $('.line').removeClass('blue');
  },200);
  
  setTimeout(function(){
    $('.background').addClass('hide'); 
  },400);

  setTimeout(function(){
    $('.about').removeClass('show');
  },500);

  setTimeout(function(){
    if($('.full').hasClass('show')) {  
      $('.slide').addClass('hide');
      $('.navigation').addClass('animate');
    }
    if (mobile.matches) {
      $('.projects').addClass('show');
    } else {
    }
  },600);
}

function resetProject() {
  let current = $('.single.current');
  $(current).find('.text').removeClass('show animate');
  $(current).find('.slider .image').removeClass('show');
  $(current).find('.slider .image:first').addClass('show');
  $('.single').find('.text').removeClass('animate');
  if($('.active .next-image').length === 0) {
      $('<div class="slide"></div><div class="next-image"></div>').appendTo('.active');
    } else {
     console.log('nah its here');
    }
    slideshow();
}

  function mobileFunction() {
    if (window.matchMedia('(max-width: 740px)').matches) {
        let project = $('.menu .project');
        $(project).click(function(){
          $(this).addClass('current');
          let match = $(this).attr('class').split(' ')[1];
          console.log(match);
          setTimeout(function(){
            $('.projects').removeClass('show');
            $('.name').addClass('hide');
            $('.information').addClass('hide');
            $('.background').removeClass('hide');
            $('.next-image .slide').remove();
          }, 200);
          setTimeout(function() {
            $('.background').addClass('hide');
          },1500);
          setTimeout(function() {
            setupProject();
          },1600);
    });

      $('.full .back').click(function(){
        if($('.full').hasClass('show')){
          $('.text').removeClass('animate');
          setTimeout(function(){
            $('.background').removeClass('hide'); 
          },200);
          setTimeout(function(){
            $('.navigation').removeClass('animate');
            $('.single').removeClass('show current');
            $('.slider').removeClass('active');
            $('.slider .image').removeClass('show');
            $('.full').removeClass('show');
          },500);
          setTimeout(function(){
            $('.background').addClass('hide'); 
          },1200);
          setTimeout(function(){
            $('.projects').addClass('show');
            $('.name').removeClass('hide');
            $('.information').removeClass('hide');
          },1400);
        }
    });

    if($('.full').hasClass('show')) {
      $('.projects, .about').removeClass('show');
      $('.name').addClass('hide');
      $('.information').addClass('hide');
      $('.navigation').removeClass('animate');
      showMobile();
    } else{

    }
    
  } else {

    if($('.full').hasClass('show')) {
      let current = $('.single.current');
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider .image').removeClass('show');
       setTimeout(function(){
           showProject();
         // resetProject();
       }, 200);
      }else{

      }
  }
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
  
  $('.details').click(function() {
    $('.slide').toggleClass('hide');
    $('.current .text').toggleClass('animate');
    $('.details').toggleClass('play');
  });
  
  $('.name').click(function(){
    if($('.full').hasClass('show')){
      $('.slide').removeClass('hide');
      $('.text').removeClass('animate');
      setTimeout(function(){
        $('.background').removeClass('hide'); 
      },200);
      setTimeout(function(){
        $('.navigation').removeClass('animate');
        $('.single').removeClass('show current');
        $('.slider').removeClass('active');
        $('.slider .image').removeClass('show');
        $('.full').removeClass('show');
        $('.projects').addClass('show');    
      },500);
      setTimeout(function(){
        $('.background').addClass('hide'); 
      },1200);
    }
  });

  $('.prev').click(function(e) {
      e.preventDefault();
      prevProject();
    });


  $('.hamburger').click(function() {
   if($('.about').hasClass('show')) {
    setTimeout(function(){
      hideAbout();
    }, 30);
    } else{
      showAbout();
    }
  });


  let mobile = window.matchMedia('(max-width: 740px)');
  $('.next').click(function(e) {
    e.preventDefault();
    if (mobile.matches) {
      nextMobile();
    } else {
      nextProject();
      console.log('tappity tap')
    }
  });

  showHomepage();

$(window).resize(function(){
  clearTimeout(this.id);
  this.id = setTimeout(mobileFunction, 500);
});
    mobileFunction();
});


