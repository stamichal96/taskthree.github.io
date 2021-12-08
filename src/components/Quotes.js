import React, { useState, useEffect } from "react";

import "./Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const quotesArray = new Array();

  let url = `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`;

  const getQuote = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        quotesArray.push(randomNum);
        let randomQuote = data[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        // console.log(quotesArray);
      });
  };

  const handleNewQuote = () => {
    getQuote();
    // quotesArray.push(quote, author)
    console.log(quotesArray);
  };

  const getPreviousQuote = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // let number = quotesArray[quotesArray.length - 2];
        console.log(quotesArray);
        // let previousQuote = data[number];
        // console.log(previousQuote)
        // setQuote(previousQuote.quote);
        // setAuthor(previousQuote.author);
      });
  };

  const handlePreviousQuote = () => {
    getPreviousQuote();
  };

  return (
    <div id="quote-box">
      <div id="text">
        <p>{quote}</p>
      </div>
      <div id="author">
        <p>{author}</p>
      </div>
      <div id="buttons">
        <button
          onClick={handlePreviousQuote}
          id="previous-quote"
          className="button"
          disabled
        >
          Get the previous quote
        </button>
        <button onClick={handleNewQuote} id="new-quote" className="button">
          New quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
