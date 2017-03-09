function showProject() {
  
  let section = $('.section.full');
  let single = $('.full .single');
  let selected = $('.menu .current');

  let number = $(selected).attr('class').split(' ')[1];
  
  console.log(number);
  $(section).addClass('show');
  $('.single.'+number).addClass('show');

  $('.prev').click(previousProject);
  $('.next').click(nextProject);

  let total = $(single).length;
  console.log(total);

  function nextProject() {
    let current = $('.single.show');
      if($('.single.show').next().length != 0) {
        $(current).removeClass('show').next().addClass('show'); 
        console.log('yes');
      } else {
        $(current).removeClass('show');
        $('.single:first').addClass('show');
        console.log('no');
      }
      return false;
  }

  function previousProject() {
    let current = $('.single.show');
      if($('.single.show').prev().length != 0) {
        $(current).removeClass('show').prev().addClass('show'); 
        console.log('yes');
      } else {
        $(current).removeClass('show');
        $('.single:last').addClass('show');
        console.log('no');
      }
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
  // pagination();
});


