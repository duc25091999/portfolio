const scrollSlider = document.querySelectorAll(".js-scroll-slider");
if (scrollSlider.length > 0) {
  scrollSlider.forEach((slider) => {
    const speed = slider.dataset.autoSpeedRatio
      ? Number(slider.dataset.autoSpeedRatio)
      : 0.5;

    const sliderWrap = document.createElement("div");
    sliderWrap.classList.add("js-scroll-slider-wrap");
    slider.after(sliderWrap);
    sliderWrap.append(slider);

    const children = slider.children;
    const childLength = children.length;

    let baseChildren = "";
    for (let i = 0; i < children.length; i++) {
      baseChildren += children[i].outerHTML;
    }

    const firstChild = slider.firstElementChild;

    let sliderWidth, winWidth;
    let countWidth = 0;
    let addCount = 1;
    const initializeSlider = (countWidth, addCount) => {
      const styles = getComputedStyle(firstChild);
      const width = parseFloat(styles.width);
      const marginRight = parseFloat(styles.marginRight);
      sliderWidth = (width + marginRight) * childLength;

      winWidth = window.innerWidth;
      const checkWidth = winWidth * 3;
      countWidth = sliderWidth * addCount;
      while (countWidth < checkWidth) {
        slider.insertAdjacentHTML("beforeend", baseChildren);
        ++addCount;
        countWidth = sliderWidth * addCount;
      }

      slider.style.marginLeft = "-" + sliderWidth + "px";
    };
    initializeSlider(countWidth, addCount);

    let requestID;
    let x = 0;

    const isReverse = slider.classList.contains("is-reverse");

    const scrollAnime = () => {
      if (
        (!isReverse && x <= -sliderWidth) ||
        (isReverse && x >= sliderWidth)
      ) {
        x = 0;
      }
      slider.style.transform = "translateX(" + x + "px)";
      if (isReverse) {
        x += 1 * speed;
      } else {
        x -= 1 * speed;
      }
      requestID = requestAnimationFrame(scrollAnime);
    };

    const sliderStyles = getComputedStyle(slider);
    let isDown = false;
    let isRightMove = false;
    let startX;
    let sliderX;
    let isIntersecting = false;

    const startFunc = (e) => {
      e.preventDefault();
      if (e.type === "touchstart") {
        startX = e.changedTouches[0].pageX;
      } else {
        startX = e.pageX;
      }
      slider.classList.add("is-drag");
      isDown = true;

      sliderWrap.style.cursor = "grabbing";

      cancelAnimationFrame(requestID);

      let matrix = new DOMMatrix(sliderStyles.transform);
      sliderX = parseFloat(matrix.m41);
    };

    const moveFunc = (e) => {
      if (!isDown) {
        return;
      }
      e.preventDefault();
      let moveX;
      if (e.type === "touchmove") {
        moveX = startX - e.changedTouches[0].pageX;
      } else {
        moveX = startX - e.pageX;
      }
      if (moveX < 0) {
        isRightMove = true;
      } else {
        isRightMove = false;
      }
      requestID = requestAnimationFrame(() => {
        x = sliderX - moveX;
        slider.style.transform = "translateX(" + x + "px)";
      });
    };

    const endFunc = (e) => {
      e.preventDefault();
      slider.classList.remove("is-drag");
      isDown = false;

      sliderWrap.style.cursor = "grab";

      if (!isRightMove && x * -1 >= sliderWidth) {
        x = sliderWidth - x * -1;
        slider.style.transform = "translateX(" + x + "px)";
      } else if (isRightMove && x >= 0) {
        x = -(sliderWidth - x);
        slider.style.transform = "translateX(" + x + "px)";
      }

      cancelAnimationFrame(requestID);
      if (isIntersecting) {
        requestID = requestAnimationFrame(scrollAnime);
      }
    };

    sliderWrap.addEventListener("touchstart", startFunc, { passive: true });
    sliderWrap.addEventListener("touchmove", moveFunc, { passive: true });
    sliderWrap.addEventListener("touchend", endFunc);

    sliderWrap.addEventListener("mouseenter", () => {
      sliderWrap.style.cursor = "grab";
    });
    sliderWrap.addEventListener("mousedown", startFunc);
    sliderWrap.addEventListener("mousemove", moveFunc);
    sliderWrap.addEventListener("mouseup", endFunc);
    sliderWrap.addEventListener("mouseleave", endFunc);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cancelAnimationFrame(requestID);
          requestID = requestAnimationFrame(scrollAnime);

          isIntersecting = true;
        } else {
          cancelAnimationFrame(requestID);

          isIntersecting = false;
        }
      });
    });
    observer.observe(sliderWrap);

    const resizeObserver = new ResizeObserver(() => {
      initializeSlider(countWidth, addCount);

      cancelAnimationFrame(requestID);
      requestID = requestAnimationFrame(scrollAnime);
    });

    resizeObserver.observe(firstChild);
  });
}
