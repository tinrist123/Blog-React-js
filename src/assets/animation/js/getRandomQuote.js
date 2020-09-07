import $ from "jquery";

$(document).ready(function () {
  let loopQuote = setInterval(
    () => RandomQuotes("quote", "author", true),
    15000
  );

  let colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  if (localStorage.quotes == null) {
    $.ajax({
      type: "GET",
      async: true,
      crossDomain: true,
      url: "https://type.fit/api/quotes",
      success: function (data) {
        localStorage.setItem("quotes", data);
      },
    });
  }
  // $(".quote-text").animate({ opacity: 0 }, 500, function () {
  //   $(this).animate({ opacity: 1 }, 500);
  //   $("#text").text(randomQuote.quote);
  // });

  function RandomQuotes(quote, author, btnChange = false) {
    let indexRand = Math.floor(Math.random() * 1643);

    let arrQuotes = JSON.parse(localStorage.quotes);
    let color = Math.floor(Math.random() * colors.length);

    $("#" + quote).animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $("#" + quote).text(arrQuotes[indexRand].text);
    });
    if (btnChange == true) {
      $("#" + author).animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1, color: colors[color] }, 500);
        $(this).text("- " + arrQuotes[indexRand].author);
      });
    } else {
      $("#" + author).animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $(this).text("- " + arrQuotes[indexRand].author);
      });
    }

    if (btnChange == true) {
      $(".js-randomQuotes").animate(
        {
          backgroundColor: colors[color],
        },
        1000
      );
    }
    $("blockquote").animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });
    clearInterval(loopQuote);
    setInterval(loopQuote, 15000);
  }

  RandomQuotes("quote", "author");

  $("#js-randomQuotes").click(() => RandomQuotes("quote", "author", true));
});
