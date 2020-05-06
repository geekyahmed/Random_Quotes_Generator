const express = require("express");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});
const PORT = process.env.PORT || 3000;
const app = express();
// Setting Up Handlebars For Views
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const quotes = [
    "Great men has fallen but risen once again",
    "Succes is the outcome of failure",
    "Failure is the step to success",
    "Determination is what drives great business men",
    "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
    "You can't help getting older, but you don't have to get old",
    "We have been working hard to think about what our combined needs are going to be in the way of intelligence capabilities, not today but 15 to 20 years in the future."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.render("index", { quote: randomQuote });
});

app.listen(PORT, (req, res) => {
  console.log(`Server Started At Port ${PORT}`);
});
