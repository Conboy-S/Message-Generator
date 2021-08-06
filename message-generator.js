var quotes = [
  'You are a winner!',
  'You are a loser...',
  'Try again... or you can choose to open the mystery box!',
]

function messageGenerator() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  console.log(quotes[randomNumber]);
};
