function showProject() {
  
  let section = $('.section.full');
  let single = $('.full .single');
  let selected = $('.menu .current');

  let number = $(selected).attr('class').split(' ')[1];
  
  console.log(number);
  $(section).addClass('show');
  $('.single.'+number).addClass('show');
  
    
    // $(single).addClass('show');

    // $(project).each(function(n) {
    //   if (n >= pageSize * (page - 1) && n < pageSize * page)
    //     $(this).removeClass('showing').addClass('adding');
    //     let right = $('.showing').attr('class').split(' ')[1];
    //     console.log(right);
    // });        




  $('.prev').click(prevPage);
  $('.next').click(nextPage);

  var page = 1;

  function prevPage() {
    // debugger;
    if (page === 1) {
      page = Math.floor($('.full .single').length/pageSize);
    } else {
      page--;
    }
    console.log(page);
    showPage(page);
  }

  function nextPage() {
    if (page == Math.floor($('.full .single').length/pageSize)) {
      page = 1;
    } else {
      page++;
    }
    showPage(page);
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


