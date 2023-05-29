const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const background = $(".background");
const sectionWelcome = $(".section-welcome");
const sectionheader = $(".section-header");
const welcomeBackground = $(".welcome-background");
const headerBackground = $(".header-background");
const headerContainer = $(".header-container");
const headerContainerChild = $(".header-container-child");
const tiger = $(".tiger");
const bubble = $(".bubble");

const sectionContent = $(".section-content");

const containerWelcome = $(".welcome-cake-item");
const textWelcome = $(".text-welcome");
const textWelcome1 = $(".text-1");
const textWelcome2 = $(".text-2");
const textWelcome3 = $(".text-3");
const textWelcome4 = $(".text-4");
const textWelcome5 = $(".text-5");
const textWelcome6 = $(".text-6");

const happyBirthday = $(".happy-birthday");
const text7 = $(".text-7");
const text8 = $(".text-8");
const textGlass = $(".glass");

const background1 = $(".background-1");
const background2 = $(".background-2");

const cakeElements = $$(".cake-general");
const cakeElement = [
  $(".cake-1"),
  $(".cake-2"),
  $(".cake-3"),
  $(".cake-4"),
  $(".cake-5"),
  $(".cake-6"),
  $(".cake-7"),
  $(".cake-8"),
];

const hiddenCircle = $$(".hidden-shape__circle");
const hiddenSquare = $$(".hidden-shape__square");
// const hiddenTriangle = $$(".hidden-shape__triangle");

(function () {
  var app = {
    // Thao tác cuộn chuột
    handleScroll: function () {
      const _this = this;
      document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        // console.log(scrollTop);

        const offsetHeightWelcome =
          sectionWelcome.offsetHeight - window.innerHeight;

        const offsetHeightHeader =
          offsetHeightWelcome + sectionheader.offsetHeight;

        _this.welcomeScreen(scrollTop, offsetHeightWelcome);
        _this.headerScreen(scrollTop, offsetHeightHeader);

        // console.log(sectionContent.getBoundingClientRect().top);
        // if (sectionheader.getBoundingClientRect().top <= 0) {
        // }
      };
    },

    handleIntersection: function () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });
      hiddenCircle.forEach((el) => observer.observe(el));
      hiddenSquare.forEach((el) => observer.observe(el));
    },

    // Thao tác opacity đối tượng tại điểm đầu và điểm cuối
    handleOpacityChange: function (
      ob,
      currentScroll,
      startPointIncrease,
      endPointIncrease,
      startPointReduce,
      endPointReduce
    ) {
      var opacityValue;

      if (currentScroll < startPointIncrease) {
        opacityValue = 0;
      } else if (
        currentScroll >= startPointIncrease &&
        currentScroll <= endPointIncrease
      ) {
        opacityValue =
          (currentScroll - startPointIncrease) /
          (endPointIncrease - startPointIncrease);
      } else if (
        currentScroll > endPointIncrease &&
        currentScroll < startPointReduce
      ) {
        opacityValue = 1;
      } else if (
        currentScroll >= startPointReduce &&
        currentScroll <= endPointReduce
      ) {
        opacityValue =
          1 -
          (currentScroll - startPointReduce) /
            (endPointReduce - startPointReduce);
      } else {
        opacityValue = 0;
      }

      opacityValue = Math.max(0, Math.min(1, opacityValue));

      ob.style.opacity = opacityValue;

      function animate() {
        // Gọi lại hàm animate để tạo hiệu ứng mượt mà
        requestAnimationFrame(animate);
      }
      animate();
    },

    // Di chuyển động các bánh kẹo
    moveCake: function (scroll) {
      cakeElement[0].style.transform = `matrix(1,0,0,1,${scroll},0)`;
      cakeElement[1].style.transform = `matrix(1,0,0,1,${-scroll},${scroll})`;
      cakeElement[2].style.transform = `matrix(1,0,0,1,0,${scroll})`;
      cakeElement[3].style.transform = `matrix(1,0,0,1,${scroll},${scroll})`;
      cakeElement[4].style.transform = `matrix(1,0,0,1,${-scroll * 1.5},0)`;
      cakeElement[5].style.transform = `matrix(1,0,0,1,0,${-scroll})`;
      cakeElement[6].style.transform = `matrix(1,0,0,1,${scroll},${-scroll})`;
      cakeElement[7].style.transform = `matrix(1,0,0,1,${-scroll * 1.6},${
        scroll * 1.6
      })`;
    },

    // Phóng to / thu nhỏ từ điểm bắt đầu đến điểm cuối
    handleScaleChange: function (ob, scroll, startPoint, endPoint, scalePoint) {
      if (scroll >= startPoint && scroll <= endPoint) {
        var scaleCal = (scroll - startPoint) / (endPoint - startPoint);
      }

      if (scalePoint <= 0) {
        scale = 0;
      } else if (scalePoint > 0 && scalePoint < 1) {
        scale = 1 - (1 - scalePoint) * scaleCal;
      } else if (scalePoint == 1) {
        scale = 1;
      } else {
        scale = 1 + (scalePoint - 1) * scaleCal;
      }

      ob.style.scale = scale;
    },

    welcomeScreen: function (scroll, obHeight) {
      if (scroll <= obHeight) this.moveCake(scroll);

      this.handleScaleChange(welcomeBackground, scroll, 0, obHeight, 4);

      this.handleOpacityChange(
        textWelcome1,
        scroll,
        0,
        0,
        obHeight * 0.17,
        obHeight * 0.2
      );

      this.handleOpacityChange(
        textWelcome2,
        scroll,
        obHeight * 0.2,
        obHeight * 0.21,
        obHeight * 0.29,
        obHeight * 0.3
      );
      this.handleOpacityChange(
        textWelcome3,
        scroll,
        obHeight * 0.3,
        obHeight * 0.31,
        obHeight * 0.39,
        obHeight * 0.4
      );
      this.handleOpacityChange(
        textWelcome4,
        scroll,
        obHeight * 0.4,
        obHeight * 0.41,
        obHeight * 0.49,
        obHeight * 0.5
      );
      this.handleOpacityChange(
        textWelcome5,
        scroll,
        obHeight * 0.5,
        obHeight * 0.51,
        obHeight * 0.59,
        obHeight * 0.6
      );
      this.handleOpacityChange(
        textWelcome6,
        scroll,
        obHeight * 0.6,
        obHeight * 0.61,
        obHeight * 0.9,
        obHeight * 0.9
      );
    },

    headerScreen: function (scroll, obHeight) {
      if (sectionheader.getBoundingClientRect().top <= 0) {
        headerContainer.classList.add("show");
        background2.classList.add("show");
        tiger.classList.add("show");

        background2.style.top = 100 + -scroll * 0.1 + "px";
        bubble.style.top = 60 + (scroll - obHeight) * 0.05 + "px";
        happyBirthday.style.top = 50 + -(scroll - obHeight) * 0.03 + "px";

        setTimeout(function () {
          bubble.classList.add("show");
        }, 300);

        setTimeout(function () {
          headerContainerChild.classList.add("show-hide");
        }, 800);

        setTimeout(function () {
          text7.classList.add("show");
        }, 900);

        setTimeout(function () {
          text8.classList.add("show");
        }, 1100);

        setTimeout(function () {
          textGlass.classList.add("show");
        }, 1300);
      } else {
        headerContainer.classList.remove("show");
        background2.classList.remove("show");
        tiger.classList.remove("show");
        bubble.classList.remove("show");
        headerContainerChild.classList.remove("show-hide");
      }
    },

    contentScreens: function (scroll, obHeight) {},

    // RUN
    start: function () {
      this.handleScroll();
      this.handleIntersection();
    },
  };
  app.start();
})();
