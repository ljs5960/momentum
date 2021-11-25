const quotes = [
  {
    quote: "어쩌고저쩌고",
    author: "나다1",
  },
  {
    quote: "저쩌고어쩌고",
    author: "나다씹새끼야2",
  },
  {
    quote: "저쩌고저쩌고",
    author: "나다개새끼야3",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;