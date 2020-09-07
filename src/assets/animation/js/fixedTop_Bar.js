import $ from "jquery";


$(document).ready(function () {
  let lastScrollPos = 0;
  if ($(window).scrollTop() < 30) {
    if (!$("#maincontent").hasClass("fixed_Topbar")) {
      $("#maincontent").css({
        top: 0,
        background: "#fff",
      });
    } else {
      $("#maincontent").removeClass("fixed_Topbar");
    }
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      if (lastScrollPos < $(window).scrollTop()) {
        $("#maincontent").css({
          top: $(window).scrollTop(),
          background: "transparent",
        });
      } else {
        $("#maincontent").removeClass("fixed_Topbar");
        $("#maincontent").css({
          top: $(window).scrollTop(),
          background: "transparent",
        });
      }

      lastScrollPos = $(window).scrollTop();
    }
    if ($(window).scrollTop() > 470) {
      $("#maincontent").css({
        background: "#fff",
      });
      $("#maincontent").addClass("fixed_Topbar");
      $("#maincontent").css({
        top: 0,
      });
    }
    if ($(window).scrollTop() < 40) {
      if (!$("#maincontent").hasClass("fixed_Topbar")) {
        $("#maincontent").css({
          top: 0,
          background: "#fff",
        });
      } else {
        $("#maincontent").removeClass("fixed_Topbar");
      }
    }
  });
});

//
//
