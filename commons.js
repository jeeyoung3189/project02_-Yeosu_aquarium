$(function () {
  $('.ham').click(function () {
    $(this).addClass('on')
    $('.gnb').addClass('on')
    scroll_on()
  })
  $('.mb_logo').click(function () {
    scroll_off()
  })
// 스크롤 제한 ON
  function scroll_on() {
    $('.wrap').on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
      // return false;
    });
  }
  // 스크롤 제한 OFF
  function scroll_off() {
    $('.wrap').off('scroll touchmove mousewheel');
  }
  $('.mb_menu').click(function () {
    $('.gnb').removeClass('on')
  })
  $('.gnb>li>a').click(function (e) {
    e.preventDefault()
  })

  $('.gnb>li').click(function () {
    if ($(this).attr('class') != 'on') {
      $('.sub').slideUp()
      $(this).find('.sub').slideToggle()
      $('.gnb>li').removeClass('on')
      $(this).addClass('on')
    } else {
      $(this).find('.sub').slideToggle()
      $('.gnb>li').removeClass('on')
    }
  })

  // 모바일 상단 네비 사진 호버
  $('.mb_nav li').on('mouseenter', function () {
    let nthm = $(this).index() + 1
    $(this).find('img').attr('src', `./img/top_nav_icon_hover_0${nthm}.png`)
  })
  $('.mb_nav li').on('mouseleave', function () {
    let nthm = $(this).index() + 1
    $(this).find('img').attr('src', `./img/top_nav_icon_0${nthm}.png`)
  })
  // 운영시간 사진 호버
  $('.time_plus a').on('mouseenter', function () {
    let nth = $(this).index() + 1
    $(this).find('img').attr('src', `./img/information_icon_0${nth}_1.png`)
  })
  $('.time_plus a').on('mouseleave', function () {
    let nth = $(this).index() + 1
    $(this).find('img').attr('src', `./img/information_icon_0${nth}.png`)
  })
  // 이용금액 사진 호버
  $('.money_plus a').on('mouseenter', function () {
    let nth2 = $(this).index() + 3
    $(this).find('img').attr('src', `./img/information_icon_0${nth2}_1.png`)
  })
  $('.money_plus a').on('mouseleave', function () {
    let nth2 = $(this).index() + 3
    $(this).find('img').attr('src', `./img/information_icon_0${nth2}.png`)
  })
  // 이벤트 사진 호버
  $('.evt1 a').on('mouseenter', function () {
    let nth3 = $(this).index()
    $(this).find('img').attr('src', `./img/event_icon_0${nth3}.png`)
  })
  $('.evt1 a').on('mouseleave', function () {
    let nth3 = $(this).index()
    $(this).find('img').attr('src', `./img/event_icon_0${nth3}_1.png`)
  })

  $('.evt2 a').on('mouseenter', function () {
    let nth3 = $(this).index() + 1
    $(this).find('img').attr('src', `./img/event_icon_0${nth3}.png`)
  })
  $('.evt2 a').on('mouseleave', function () {
    let nth3 = $(this).index() + 1
    $(this).find('img').attr('src', `./img/event_icon_0${nth3}_1.png`)
  })

  $('.evt3 a').on('mouseenter', function () {
    let nth3 = $(this).index() + 2
    $(this).find('img').attr('src', `./img/event_icon_0${nth3}.png`)
  })
  $('.evt3 a').on('mouseleave', function () {
    let nth3 = $(this).index() + 2
    $(this).find('img').attr('src', `./img/event_icon_0${nth3}_1.png`)
  })

  // 프로그램 사진 호버
  $('.pro_list li').on('mouseenter', function () {
    let nthp = $(this).index() + 1
    $(this).find('img').attr('src', `./img/program_img_0${nthp}.jpg`)
  })
  $('.pro_list li').on('mouseleave', function () {
    let nthp = $(this).index() + 1
    $(this).find('img').attr('src', `./img/program_img_0${nthp}_1.png`)
  })

  // 커뮤니티 슬라이드


  // breakpoints: {
  //   1000: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //     clickable: true
  //   },
  let slide = setInterval(function () {
    sldideAni()
  }, 5000)

  $(window).resize(function () {
    if ($(window).width() > 1000) {
      clearInterval(slide)
    } else {
      slide = setInterval(function () {
        sldideAni()
      }, 5000)
    }
  });

  function sldideAni() {
    $('.commu_list').not(':animated').animate({
      marginLeft: -100 + '%'
    }, 500, function () {
      $('.commu_list li').eq(0).appendTo('.commu_list')
      $('.commu_list').css({
        marginLeft: 0
      })
    })
    $('.dot_con span').eq(0).appendTo('.dot_con')
  }

  // 100vh씩
  window.addEventListener("wheel", function (e) {
    e.preventDefault();
  }, {
    passive: false
  });

  var $html = $("html");
  var page = 1;
  var lastPage = $(".content").length;

  $html.animate({
    scrollTop: 0
  }, 10);

  $(window).on("wheel", function (e) {

    if ($html.is(":animated")) return;

    if (e.originalEvent.deltaY > 0) {
      if (page == lastPage) return;

      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) return;

      page--;
    }
    var posTop = (page - 1) * $(window).height();

    $html.animate({
      scrollTop: posTop
    });

  });
})