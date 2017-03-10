
function showProject() {

  slideshow();
  
  let section = $('.section.full');
  let single = $('.full .single');
  let selected = $('.menu .current');

  let number = $(selected).attr('class').split(' ')[1];
  console.log(number);

  setTimeout(function(){
    $('.slider .image:first').addClass('show');
  }, 200);

  $(section).addClass('show');
  $('.single.'+number).addClass('show');

  $('.prev').click(function() {
    $('.slider .image').removeClass('show');
      setTimeout(function(){
        prevClick();
      }, 1200);
  });

  $('.next').click(nextProject);

  function nextProject() {
    let current = $('.single.show');
      if($(current).next().length != 0) {
        $(current).removeClass('show').next().addClass('show'); 
      } else {
        $(current).removeClass('show');
        $('.single:first').addClass('show');
      }
      return false;
  }

   function prevClick() {
    let current = $('.single.show');
      if($(current).prev('.single').length != 0) {
        $(current).removeClass('show').prev('.single').addClass('show'); 
        setTimeout(function(){
          $('.slider .image:first').addClass('show');
        }, 200);
      } else {
        $(current).removeClass('show');
        $('.single:last').addClass('show');
        setTimeout(function(){
          $('.slider .image:first').addClass('show');
        }, 200);
      }
      return false;
  }
}

function slideshow() {

  let currentImage = 0;
  let total = $('.single .slider .image').length;

  $('.slider .right').click(function() {
    $('.image.show').removeClass('show').next().addClass('show');
      currentImage++;
      if(currentImage>=total) {
        currentImage = 0;
        $('.image.show').removeClass('show');
        $('.slider .image:first').addClass('show');
      }  
        
      console.log(currentImage);
  });

  // function setFramePosition(pos){

  //     // //calculate position
  //     // let px = imageWidth*pos*-1;
  //     // //set ul left position
  //     $('.slider .image').addClass('show');
  // }

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
    $('.projects').addClass('hide');
    $(this).parent(project).addClass('current');
    let match = $(this).parent(project).attr('class').split(' ')[1];
    // console.log(match);
    showProject();
  });
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
    $('.navigation').toggleClass('show');
  });

  $('.details').mouseenter(function() {
    $('.description').addClass('show');
  });
   $('.details').mouseleave(function() {
    $('.description').removeClass('show');
  });

  previewProjects();
});


