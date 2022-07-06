document.addEventListener("DOMContentLoaded", function (event) {
  var project0Img = document.querySelector("#project-img-0");
  var project1Img = document.querySelector("#project-img-1");
  var project2Img = document.querySelector("#project-img-2");
  // var project3Img = document.querySelector("#project-img-3");
  var project4Img = document.querySelector("#project-img-4");
  var project5Img = document.querySelector("#project-img-5");
  var project6Img = document.querySelector("#project-img-6");
  var modal0 = document.querySelector("#modal-project-0");
  var modal1 = document.querySelector("#modal-project-1");
  var modal2 = document.querySelector("#modal-project-2");
  // var modal3 = document.querySelector("#modal-project-3");
  var modal4 = document.querySelector("#modal-project-4");
  var modal5 = document.querySelector("#modal-project-5");
  var modal6 = document.querySelector("#modal-project-6");
  var modalbg = document.querySelector(".modalbg");
  var closebtn0 = document.querySelector("#close-btn-0");
  var closebtn1 = document.querySelector("#close-btn-1");
  var closebtn2 = document.querySelector("#close-btn-2");
  // var closebtn3 = document.querySelector("#close-btn-3");
  var closebtn4 = document.querySelector("#close-btn-4");
  var closebtn5 = document.querySelector("#close-btn-5");
  var closebtn6 = document.querySelector("#close-btn-6");

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
  var tlSpan0 = gsap.timeline({
    scrollTrigger: {
      trigger: "#span-1",
      start: "center 50%",
    },
  })
  tlSpan0.to(
    "#span-1",
    { width: "100%", duration: 1.5, ease: Power4.easeOut },
    "-=1.5"
  );
  var tlProject0 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project0",
      start: "center 80%",
    },
  });
  tlProject0
    .to("#imgcover0", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project0 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span0",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );
  var tlProject1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project1",
      start: "center 80%",
    },
  });
  tlProject1
    .to("#imgcover1", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project1 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span1",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );

  var tlProject2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project2",
      start: "center 80%",
    },
  });
  tlProject2
    .to("#imgcover2", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project2 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span2",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );

  var tlProject3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project3",
      start: "center 80%",
    },
  });
  tlProject3
    .to("#imgcover3", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project3 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span3",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );
  var tlProject4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project4",
      start: "center 80%",
    },
  });
  tlProject4
    .to("#imgcover4", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project4 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span4",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );
  var tlProject5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project5",
      start: "center 80%",
    },
  });
  tlProject5
    .to("#imgcover5", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project5 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span5",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );
  var tlProject6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project6",
      start: "center 80%",
    },
  });
  tlProject6
    .to("#imgcover6", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project6 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span6",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );

  var tlProject7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#project7",
      start: "center 80%",
    },
  });
  tlProject7
    .to("#imgcover7", { y: "-100%", duration: 1.5, ease: Power4.easeOut })
    .staggerFrom(
      "#project7 .hiretext",
      1,
      { y: "100%", ease: Power3.easeOut },
      0.15,
      "-=1"
    )
    .to(
      "#span7",
      { width: "100%", duration: 1.5, ease: Power4.easeOut },
      "-=1.5"
    );

  project0Img.addEventListener("click", () => {
    modalbg.style.opacity = 1;
    modalbg.style.visibility = "visible";
    modal0.style.visibility = "visible";
  });
  project1Img.addEventListener("click", () => {
    modalbg.style.opacity = 1;
    modalbg.style.visibility = "visible";
    modal1.style.visibility = "visible";
  });
  project2Img.addEventListener("click", () => {
    modalbg.style.opacity = 1;
    modalbg.style.visibility = "visible";
    modal2.style.visibility = "visible";
  });
  // project3Img.addEventListener('click',()=>{
  //   modalbg.style.opacity=1;
  //   modalbg.style. visibility="visible";
  //   modal3.style.visibility="visible";
  // })
  project4Img.addEventListener("click", () => {
    modalbg.style.opacity = 1;
    modalbg.style.visibility = "visible";
    modal4.style.visibility = "visible";
  });
  project5Img.addEventListener("click", () => {
    modalbg.style.opacity = 1;
    modalbg.style.visibility = "visible";
    modal5.style.visibility = "visible";
  });
  project6Img.addEventListener("click", () => {
    modalbg.style.opacity = 1;
    modalbg.style.visibility = "visible";
    modal6.style.visibility = "visible";
  });
  closebtn0.addEventListener("click", () => {
    modalbg.style.opacity = 0;
    modalbg.style.visibility = "hidden";
    modal0.style.visibility = "hidden";
  });
  closebtn1.addEventListener("click", () => {
    modalbg.style.opacity = 0;
    modalbg.style.visibility = "hidden";
    modal1.style.visibility = "hidden";
  });
  closebtn2.addEventListener("click", () => {
    modalbg.style.opacity = 0;
    modalbg.style.visibility = "hidden";
    modal2.style.visibility = "hidden";
  });
  // closebtn3.addEventListener('click',()=>{
  //   modalbg.style.opacity=0;
  //   modalbg.style. visibility="hidden";
  //   modal3.style.visibility="hidden";
  // })
  closebtn4.addEventListener("click", () => {
    modalbg.style.opacity = 0;
    modalbg.style.visibility = "hidden";
    modal4.style.visibility = "hidden";
  });
  closebtn5.addEventListener("click", () => {
    modalbg.style.opacity = 0;
    modalbg.style.visibility = "hidden";
    modal5.style.visibility = "hidden";
  });
  closebtn6.addEventListener("click", () => {
    modalbg.style.opacity = 0;
    modalbg.style.visibility = "hidden";
    modal6.style.visibility = "hidden";
  });
});
