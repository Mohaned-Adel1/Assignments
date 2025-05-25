let quotes = [
  {
    qoute: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    qoute:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
    author: "Marilyn Monroe",
  },
  { qoute: "So many books, so little time.", author: " Frank Zappa" },
  {
    qoute:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: " Albert Einstein",
  },
  {
    qoute: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    qoute:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    qoute: "Be the change that you wish to see in the world.",
    author: " Mahatma Gandhi",
  },
  {
    qoute:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
];
let lastIndex;

function genQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === lastIndex);
  let qouteBody = quotes[newIndex].qoute;
  let qouteAuth = quotes[newIndex].author;
  lastIndex = newIndex;
  document.getElementById("quote").innerHTML = `"${qouteBody}"`;
  document.getElementById("author").innerHTML = `-- ${qouteAuth}`;
}
