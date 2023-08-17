function generate() {
  var quotes = {
    "Albert Camus":
      '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',

    "Tennessee Williams": "To be free is to have achieved your life.",
    "Richard Bach":
      "If you love someone, set them free. If they come back they're yours; if they don't they never were.",
  };

  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
