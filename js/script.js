$(document).ready(function(){
  // function scrollToTop(){
  //   window.scrollTo({top:0, behavior: 'smooth'});
  // }

  // topbtn.click(function(){
  //   scrollToTop();
  // });

  const topbtn = $('.top-btn');

  topbtn.click(function(){
    $('html,body').animate({
      scrollTop:0
    },1000);
  });
  
  // btn.on('click',function(){
  //   $('html,body').animate({
  //     scrollTop:0
  //   },1000);
  //   });

  $(window).scroll(function(){

    if($(window).scrollTop() > 300){
      topbtn.addClass('active');
    }else{
      topbtn.removeClass('active');
    }
  });
  


  $('.header').mouseenter(function(){
    $('.sub-menu-wrap').addClass('active');
  });
  $('.sub-menu-wrap').mouseleave(function(){
    $(this).removeClass('active');
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
      delay:2500
    }
  });


});//end