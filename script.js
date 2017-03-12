function showFirst() {
  setTimeout(function(){
  $('.single.show').find('.slider .image:first').addClass('show');
  }, 200);
}

function showProject() {
  
  let section = $('.section.full');
  let single = $('.full .single');
  let selected = $('.current');
  let number = $(selected).attr('class').split(' ')[1];
  
  let active = $('.single.'+number);

  $(section).addClass('show');
  $(active).addClass('show');
  showFirst();
  slideshow();


  function nextProject() {
    let current = $('.single.show');
      if($(current).next().length != 0) {
        $('.slider .image').removeClass('show');
        $(current).removeClass('show').next().addClass('show');
        showFirst();
      } else {
        $(current).removeClass('show');
        $('.single:first').addClass('show');
        showFirst();
      }
      return false;
  }
   
   function prevProject() {
    let current = $('.single.show');
      if($(current).prev('.single').length != 0) {
        $('.slider .image').removeClass('show');
        $(current).removeClass('show').prev('.single').addClass('show');  
        showFirst();
      } else {
        $(current).removeClass('show');
        $('.single:last').addClass('show');
        showFirst();
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


function slideshow() {
  let currentImage = 0;
  let active = $('.single.show').find('.slider .image');
  let total = $(active).length;

  $('.right').click(function() {
    $('.image.show').removeClass('show').next().addClass('show');
      currentImage++;
      if(currentImage>=total) {
        currentImage = 0;
        $('.image.show').removeClass('show');
        $('.slider .image:first').addClass('show');
      }  
  });
      console.log(total);
      console.log(currentImage);

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
    console.log(match);
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


