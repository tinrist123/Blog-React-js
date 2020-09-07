import $ from "jquery";

$(document).ready(function () {
  let listCate = $(".nav-categories__menu li");
  listCate.click(function () {
    $(".nav-categories__menu li.active").removeClass("active");
    $(this).addClass("active");
  });
});
