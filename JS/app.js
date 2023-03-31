$(function(){
    // NavFixed
    let nav = $('nav')
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        if (scrollTop > 400){
            nav.addClass('navFixed')
        }
        else{
            nav.removeClass('navFixed')
        }
    });
    // // Search input show and hide
    let searchIcon = $('.search-input')
    let searchArea = $('.searchArea')
    let cancelIcon = $('.cancle_icon')
    searchIcon.click(function(){
        searchArea.show(200)
    })
    cancelIcon.click(function(){
        searchArea.hide(200)
    })

    // Banner Slider
    $("#banner").slick({
        arrows:false,
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        
    })
    
  // New arrival section starts here
  $('.Product_slider').slick({
    slidesToShow:4,
    slidesToScroll: 4,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 991,
         settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
        }
      }
    ]
  });  
  // New arrival section ends here

  // latest news section starts here
    $('.latest_slider').slick({
      slidesToShow:4,
      slidesToScroll: 4,
      dots:true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            centerPadding: '0',
            dots:true,
          }
        },
        {
          breakpoint: 991,
           settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerPadding: '0',
            dots:true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: '0',
            dots:false,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0',
          }
        }
      ]
    });  
 // latest news section ends here
//  BeautyInspire video
  let Sbtn = $('.beautyOverlay');
  let Bvideo = $('.beautyvideo');
  Bvideo.click(function(){
    Sbtn.hide(200);
    video.play();
  });
  Sbtn.show(200);
    video.pause();

// Dealsday COUNTDOWN
$('.countdown').countdown("2025/01/24,12:00:00" ,function(e){
  let time = e.strftime('%D days %H:%M:%S')
  $('.countdown .days').html(e.strftime('%D'))
  $('.countdown .hour').html(e.strftime('%H'))
  $('.countdown .min').html(e.strftime('%M'))
  $('.countdown .sec').html(e.strftime('%S'))
});

// Deals day slider
$('.deal_slider').slick({
  slidesToShow:2,
  slidesToScroll:2,
  arrows:false,
  dots:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        centerPadding: '0',
        dots:true,
      }
    },
    {
      breakpoint: 991,
       settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: '0',
        dots:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        centerPadding: '0',
        dots:false,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        dots:true,
      }
    }
  ]
})
    

});




// javascript
 // BeautyInspire video 
  var video = document.getElementById('BeautyV');
  var btn = document.getElementById('beautyOverlay')
  function play(){
    if(video.paused){
      video.play();
    }
    else{
      video.pause();
    }
  }

