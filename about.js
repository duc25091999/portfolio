document.addEventListener("DOMContentLoaded", function (event) {
    function hidePreloader() {
      var preloader = document.querySelector("#loader-wrapper");
      preloader.style.opacity = 0;
      preloader.style.zIndex = -99;
    }
    setTimeout(hidePreloader, 2000);
    var tl = gsap.timeline();
    tl.staggerFrom(
      ".hiredText",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "+=2"
    );
  
    var tlIntroPic = gsap.timeline({
      scrollTrigger: {
        trigger: ".intro__picture",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tlIntroPic.to(".intro__picture", { y: "-15%", ease: Power3.easeOut });
  
    var tlBio = gsap.timeline({
      scrollTrigger: {
        trigger: ".bio__1",
        start: "bottom bottom",
      },
    });
    tlBio.staggerFrom(
      ".bio__hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15
    );
  
    var tlContact = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact__right",
        start: "50% bottom",
        marks: true,
      },
    });
    tlContact.staggerFrom(
      ".contact__hiretext",
      1,
      { top: "100%", ease: Power3.easeOut },
      0.15
    );
  
    var tlSkill = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "50% bottom",
      },
    });
    tlSkill
      .to("#skilllabel", {
        width: "calc( 100vw - 26rem) ",
        duration: 1,
        ease: Power3.easeOut,
      })
      .staggerFrom(
        ".skill__hiretext",
        1,
        { y: "100%", ease: Power3.easeOut },
        0.1,
        "-=1"
      );
  
    var tlWork = gsap.timeline({
      scrollTrigger: {
        trigger: ".works ul",
        start: "40% bottom",
      },
    });
    tlWork.staggerFrom(
      ".work__hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15
    );
  
    var $cursor = $(".cursor"),
      $overlay = $(".project-overlay");
  
    function moveCircle(e) {
      gsap.to($cursor, 0.5, {
        css: {
          left: e.pageX,
          top: e.pageY,
        },
        delay: 0.03,
      });
    }
  
    $(".p-0").hover(function () {
      $(".cursor").css({
        "background-image": "url(./images/project0.jpg)",
      });
    });
    $(".p-1").hover(function () {
      $(".cursor").css({
        "background-image": "url(./images/project1.jpg)",
      });
    });
    $(".p-2").hover(function () {
      $(".cursor").css({
        "background-image": "url(./images/project2.png)",
      });
    });
    // $(".p-3").hover(function () {
    //   $(".cursor").css({
    //     "background-image": "url(./images/pexels-roghi-arabpour-4467879.jpg)",
    //   });
    // });
    $(".p-4").hover(function () {
      $(".cursor").css({
        "background-image": "url(./images/project3.jpg)",
      });
    });
    $(".p-5").hover(function () {
      $(".cursor").css({
        "background-image": "url(./images/project4.jpg)",
      });
    });
    $(".p-6").hover(function () {
      $(".cursor").css({
        "background-image": "url(./images/project5.jpg)",
      });
    });
  
    var flag = false;
    $($overlay).mousemove(function () {
      flag = true;
      gsap.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
      $($overlay).on("mousemove", moveCircle);
    });
  
    $($overlay).mouseout(function () {
      flag = false;
      gsap.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
    });
  });
  
  $(window).scroll(function () {
    var scroll = $(window).scrollTop(),
      dh = $(document).height(),
      wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 30;
    $(".progressbar").css("height", scrollPercent + "%");
  });
  