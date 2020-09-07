import React, { Component } from "react";
import $ from "jquery";


import Loading from '../../Loader/Loading';

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quotes: [],
    }
  }

  RandomQuotes(quote, author, btnChange = false, arrQuote, loopQuote) {

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

    let indexRand = Math.floor(Math.random() * 1643);

    let arrQuotes = arrQuote;
    let color = Math.floor(Math.random() * colors.length);

    $("#" + quote).animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      $("#" + quote).text(arrQuotes[indexRand].text);
    });
    if (btnChange === true) {
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

    $("blockquote").animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });
    clearInterval(loopQuote);
    setInterval(loopQuote, 15000);
  }


  async componentDidMount() {
    // if (localStorage.quotes == null) {
    let url = "https://type.fit/api/quotes";
    let response = await fetch(url);
    let data = await response.json();

    this.setState((state) => ({
      loading: true,
      quotes: data
    }))

    let loopQuote = setInterval(
      () => this.RandomQuotes("quote", "author", true, this.state.quotes, loopQuote),
      15000
    );


    $("#js-randomQuotes").click(() => this.RandomQuotes("quote", "author", true, this.state.quotes, loopQuote));


  }

  render() {
    if (this.state.loading === false) {
      return (
        <div>
          <Loading />
        </div>
      )
    }
    let numRanQuote = Math.floor(Math.random() * 1643);

    return (
      <div
        class="banner-blockquote"

        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/banner.jpg')`,
          backgroundPosition: "0px 0px",
          backgroundRepeat: "no-repeat",
        }
        }
      >
        <div class="container">
          <blockquote>
            <q id="quote">
              {(this.state.quotes === []) ?
                null : this.state.quotes[numRanQuote].text
              }
            </q>
            <address id="author">
              {(this.state.quotes === []) ?
                null : this.state.quotes[numRanQuote].author
              }
            </address>
            <button class="js-randomQuotes" id="js-randomQuotes">
              Randome Quotes
            </button>
          </blockquote>
        </div>
      </div >
    );
  }
}
