import $ from "jquery";

$(document).ready(function () {
  function showAndHideNav() {
    if ($(".sidebar-menu").hasClass("showNav")) {
      $(".sidebar-menu").removeClass("showNav");
      $(".wrapper").removeClass("moveEleOx");
      $(".sidebar-menu__bgBlack").removeClass("showBgBlack");
    } else {
      $(".sidebar-menu").addClass("showNav");
      $(".wrapper").addClass("moveEleOx");
      $(".sidebar-menu__bgBlack").addClass("showBgBlack");
    }
  }

  $("#js-showNav").click(function () {
    showAndHideNav();
  });

  $(".sidebar-menu__bgBlack").click(function () {
    showAndHideNav();
  });

  $("#close-click").click(function () {
    showAndHideNav();
  });
});
