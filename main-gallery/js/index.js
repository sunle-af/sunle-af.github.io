(function() {
  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.find('figcaption').text() || item.el.attr('title');
      }
    },
    zoom: {
      enabled: true
    },
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: ''
    },
    disableOn: function() {
      if ($(window).width() < 640) {
        return false;
      }
      return true;
    }
  });

}).call(this);
window.addEventListener("scroll",event=>{let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight; 
  let progress =100*scrollTop/scrollHeight;
  document.querySelector(".progress").style.width=progress+"%";})

 