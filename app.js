const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const background = $(".background");
const sectionWelcome = $(".section-welcome");
const sectionheader = $(".section-header");
const welcomeBackground = $(".welcome-background");
const headerBackground = $(".header-background");
const container = $(".header-container");
const containerChild = $(".header-container-child");
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
const textWelcome7 = $(".text-7");
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

const canvas = $("#my-canvas");

(function () {
  var app = {
    // Thao tác cuộn chuột
    handleScroll: function () {
      const _this = this;
      document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        console.log(scrollTop);

        const offsetHeightWelcome =
          sectionWelcome.offsetHeight - window.innerHeight;

        const offsetHeightheader =
          offsetHeightWelcome + sectionheader.offsetHeight;

        _this.welcomeScreen(scrollTop, offsetHeightWelcome);

        if (sectionheader.getBoundingClientRect().top <= 0) {
          container.classList.add("show");
          background2.classList.add("show");
          tiger.classList.add("show");
          bubble.classList.add("show");
          background2.style.top = 100 + -scrollTop * 0.1 + "px";
          bubble.style.top = (scrollTop - offsetHeightheader) * 0.05 + "px";

          setTimeout(function () {
            containerChild.classList.add("show-hide");
          }, 500);
          setTimeout(function () {}, 500);
        } else {
          container.classList.remove("show");
          background2.classList.remove("show");
          // tiger.classList.remove("show");
          // bubble.classList.remove("show");
          // containerChild.classList.remove("show-hide");
        }

        console.log(sectionContent.getBoundingClientRect().top);
        if (sectionheader.getBoundingClientRect().top <= 0) {
        }
      };
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

      // function animate() {
      //   // Gọi lại hàm animate để tạo hiệu ứng mượt mà
      //   requestAnimationFrame(animate);
      // }
      // animate();
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
        obHeight * 0.13,
        obHeight * 0.16
      );

      this.handleOpacityChange(
        textWelcome2,
        scroll,
        obHeight * 0.16,
        obHeight * 0.19,
        obHeight * 0.32,
        obHeight * 0.35
      );
      this.handleOpacityChange(
        textWelcome3,
        scroll,
        obHeight * 0.35,
        obHeight * 0.38,
        obHeight * 0.48,
        obHeight * 0.51
      );
      this.handleOpacityChange(
        textWelcome4,
        scroll,
        obHeight * 0.51,
        obHeight * 0.54,
        obHeight * 0.67,
        obHeight * 0.7
      );
      this.handleOpacityChange(
        textWelcome5,
        scroll,
        obHeight * 0.7,
        obHeight * 0.73,
        obHeight * 0.86,
        obHeight * 0.89
      );
      this.handleOpacityChange(
        textWelcome6,
        scroll,
        obHeight * 0.89,
        obHeight * 0.92,
        obHeight * 0.98,
        obHeight
      );
    },

    headerScreen: function () {},

    // RUN
    start: function () {
      this.handleScroll();
    },
  };
  app.start();
})();
