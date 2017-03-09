function loadProject() {
  $('.project-section').addClass('show-project');
  $('.back-arrow').addClass('fade-in');

}

function goBack() {
  $('.project-section').addClass('hide-project');
  $('.back-arrow').removeClass('fade-in');
  setTimeout(function() {
    window.location = 'www.snehamishra.info';
  }, 1000);
}  

$(function() {
  loadProject();
  
  $('.back-arrow').click(function() {
    setTimeout(function() {
      goBack();
    }, 200);
  });

});
