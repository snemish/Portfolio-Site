function setupProject() {
  let section = $('.section.full');
  let selected = $('.current');
  let number = $(selected).attr('class').split(' ')[1];
  
  let active = $('.single.'+number);

  $(section).addClass('show');
  $(active).addClass('show current');

  let mobile = window.matchMedia('(max-width: 740px), (max-width: 1024px)');
  
  if (mobile.matches) {
      showMobile();
    } else {
      showProject();
    }
  $('.project').removeClass('current show');
  ga('send', 'event', 'link', 'click', number);  
}

function showMobile() {
    $('.projects, .about').removeClass('show');
    $('.title').addClass('hide');
    $('.information').addClass('hide');
  if($('.single').hasClass('current')) {
    $('.current').find('.slider').addClass('active');
    if($('.active .next-image').length === 0) {
      $('<div class="slide"></div><div class="next-image"></div>').appendTo('.active');
    } else {
     // console.log('its here');
    }
    setTimeout(function(){
      $('.active .image').addClass('show');
      $('.current .text').addClass('animate');
      $('.navigation').addClass('animate');
     slideshow();
    },100);
  }
}

function showProject() {
  if($('.single').hasClass('current')) {
    $('.title').addClass('clickable');
    $('.current').find('.slider').addClass('active');
    $('.active .image.show').removeClass('show');
    if($('.active .next-image').length === 0) {
      $('<div class="slide"></div><div class="next-image"></div>').appendTo('.active');
    } else {
     // console.log('nah its here');
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
  if($('.slider').hasClass('active')) {
    let currentImage = 0;
    let counter = $('.active .image.show').index() + 1;  
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
        counter = $('.image.show').index() + 1;
        $('.navigation .slider-dots p .counter').html(counter);
        ga('send', 'event', 'link', 'click', 'nextImage');  

        // console.log(currentImage);
    });
        // console.log(total);
      $('.navigation .slider-dots p .total').html(total);
      $('.navigation .slider-dots p .counter').html(counter);
  }
}

function nextProject() {
  let current = $('.single.current');
    if($(current).next().length != 0) {
      $(current).find('.text').removeClass('show animate');
      setTimeout(function(){
        $(current).find('.slider .slide').removeClass('hide');
        $('.menu-item.details').removeClass('play');
      }, 300);
      setTimeout(function(){
        $(current).find('.slider').removeClass('active');
        $(current).find('.slider .image').removeClass('show');
        $(current).find('.slider .next-image').remove();
        $(current).removeClass('show current').next().addClass('show current');
        $(current).find('.slider .slide').remove();
        showProject();
      }, 900);
    } else {
      $(current).find('.text').removeClass('show animate');
      setTimeout(function(){
        $(current).find('.slider .slide').removeClass('hide');
        $('.menu-item.details').removeClass('play');
      }, 300);
      setTimeout(function(){
        $(current).find('.slider').removeClass('active');
        $(current).removeClass('show current');
        $(current).find('.slider .next-image').remove();
        $(current).find('.slider .slide').remove();
        $('.single:first').addClass('show current');
        showProject();
      }, 900);
    }
    return false;
}

function nextMobile() {
  let current = $('.single.current');
    if($(current).next().length != 0) {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).find('.slider .image').removeClass('show');
      $(current).find('.slider .next-image').remove();
      $(current).find('.slider .slide').remove();
      $(current).removeClass('show current').next().addClass('show current');
      showMobile();
    } else {
      $(current).find('.text').removeClass('show animate');
      $(current).find('.slider').removeClass('active');
      $(current).removeClass('show current');
      $(current).find('.slider .next-image').remove();
      $(current).find('.slider .slide').remove();
      $('.single:first').addClass('show current');
      showMobile();
    }
    return false;
}
   
function prevProject() {
  let current = $('.single.current');
    if($(current).prev('.single').length != 0) {
      $(current).find('.text').removeClass('show animate');
      setTimeout(function(){
        $(current).find('.slider .slide').removeClass('hide');
        $('.menu-item.details').removeClass('play');
      }, 300);
       setTimeout(function(){
        $(current).find('.slider .image').removeClass('show');
        $(current).find('.slider').removeClass('active');
        $(current).find('.slider .next-image').remove();
        $(current).find('.slider .slide').remove();
        $(current).removeClass('show current').prev('.single').addClass('show current');  
        showProject();
      }, 900);
    } else {
      $(current).find('.text').removeClass('show animate');
      setTimeout(function(){
        $(current).find('.slider .slide').removeClass('hide');
        $('.menu-item.details').removeClass('play');
      }, 300);
      setTimeout(function(){
        $(current).find('.slider').removeClass('active');
        $(current).removeClass('show current');
        $(current).find('.slider .next-image').remove();
        $(current).find('.slider .slide').remove();
        $('.single:last').addClass('show current');
        showProject();
      }, 900);
      return false;
  }
}

function showHomepage() {
  setTimeout(function(){
    $('.background').addClass('hide');
  }, 1000);

  setTimeout(function(){
    $('.title').addClass('animate');
  }, 1300);

  setTimeout(function(){
    $('.information').addClass('animate');
    $('.projects').addClass('show');
  }, 1500);

  setTimeout(function() {
    $('.menu').addClass('show');
    $('.text').addClass('show');
  },1700)
}

function showAbout() {
  if($('.full').hasClass('show')) {
      $('.slide').removeClass('hide');
      $('.text').removeClass('animate');
      $('.title').removeClass('clickable');
    
    setTimeout(function(){
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
      $('.projects').removeClass('show');
      // let mobile = window.matchMedia('(max-width: 740px), (max-width: 1024px)');
      // if (mobile.matches) {
      // } else {
      // }
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

  let mobile = window.matchMedia('(max-width: 740px), (max-width: 1024px)');
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
      $('.title').addClass('clickable');
    }

    if(!$('.about').hasClass('show')) {
      if(!$('.full').hasClass('show')) {
        $('.projects').addClass('show');        
      }
    }
    if (mobile.matches) {
      $('.projects').addClass('show');
    }
  },800);
}

function resetProject() {
  let current = $('.single.current');
  $(current).find('.text').removeClass('show animate');
  $(current).find('.slider .image').removeClass('show');
  $(current).find('.slider .image:first').addClass('show');
  
  let counter = $('.active .image.show').index() + 1;  
  $('.active .image.show').index() + 1;
  $('.navigation .slider-dots p .counter').html(counter);
  $('.single').find('.text').removeClass('animate');
  if($('.active .next-image').length === 0) {
    $('<div class="slide"></div><div class="next-image"></div>').appendTo('.active');
  } else {
   // console.log('nah its here');
  }
}

function mobileFunction() {
  if (window.matchMedia('(max-width: 740px), (max-width: 1024px)').matches) {

    $('.full .back').click(function() {
      $('.project').removeClass('current');
      if($('.full').hasClass('show')){
        $('.text').removeClass('animate');
        setTimeout(function(){
          $('.background').removeClass('hide'); 
        },300);
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
          $('.title').removeClass('hide');
          $('.information').removeClass('hide');
        },1400);
      }
  });

  if($('.about').hasClass('show')) {
    if($('.full').hasClass('show')) {
      $('.slider').removeClass('active');
      $('.slide').removeClass('hide');
      $('.single').removeClass('current show');
      $('.projects').removeClass('show');
      $('.full').removeClass('show');
      $('.information').removeClass('hide');
      $('.title').removeClass('hide');
    }
  }

    if($('.about').hasClass('show')) {
    if($('.projects').hasClass('show')) {
      $('.projects').removeClass('show');
    }
  }

  if($('.full').hasClass('show')) {
    $('.projects').removeClass('show');
    $('.about').removeClass('show');
    $('.title').addClass('hide');
    $('.information').addClass('hide');
    $('.navigation').removeClass('animate');
    setTimeout(function(){
      $('.active .image').addClass('show');
      $('.current .text').addClass('animate');
      $('.navigation').addClass('animate');
    },100);
   }

  } else {
    resetProject();

    if($('.full').hasClass('show')) {
      $('.slide').addClass('hide');
      // console.log('remove it');
    }

    if($('.about').hasClass('show')) {     
      $('.slide').removeClass('hide');
      $('.projects').removeClass('show');
      // console.log('keep it');
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
  
  $('.title').click(function(){
    $('.project').removeClass('current');
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
        $('.next-image').remove();
        $('.slide').remove();
        $('.slider .image').removeClass('show');
        $('.full').removeClass('show');
        $('.projects').addClass('show');    
      },500);
      setTimeout(function(){
        $('.background').addClass('hide'); 
        $('.title').removeClass('clickable'); 
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
    ga('send', 'event', 'link', 'click', 'aboutMe');  
  });

  let menu = $('.project a');
  let project = $('.project .image');
  
  $(menu).mouseenter(function(){
    $('.project').removeClass('show');
    $(this).parent(project).addClass('show');
  });

  // $(menu).mouseleave(function(){
  //   $('.project').removeClass('show');
  // });

  $(menu).click(function(){
    $(this).parent(project).addClass('current');
    let match = $(this).parent(project).attr('class').split(' ')[1];
    // console.log(match);
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
    // console.log('yo');
  }); 

  $(project).click(function(){
    $(this).parent(project).addClass('current');
    let match = $(this).parent(project).attr('class').split(' ')[1];
    // console.log(match);
    setTimeout(function(){
      $('.projects').removeClass('show');
      $('.background').removeClass('hide');
    }, 200);
    setTimeout(function() {
      $('.background').addClass('hide');
      $('.title').addClass('hide');
      $('.information').addClass('hide');
    },1500);
    setTimeout(function() {
      setupProject();
    },1600);
    // console.log('yo');
  }); 

  let mobile = window.matchMedia('(max-width: 740px), (max-width: 1024px)');
  $('.next').click(function(e) {
    e.preventDefault();
    if (mobile.matches) {
      nextMobile();
    } else {
      nextProject();
      // console.log('tappity tap');
    }
  });

  showHomepage();

$(window).resize(function(){
  clearTimeout(this.id);
  this.id = setTimeout(mobileFunction, 160);
});
    mobileFunction();
});
