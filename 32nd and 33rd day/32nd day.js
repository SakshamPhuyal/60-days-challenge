document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("newQuoteBtn");

  const fetchQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => {
        quoteElement.textContent = `"${data.quote}" — ${data.author}`;
      })
      .catch(error => {
        quoteElement.textContent = "Failed to load quote.";
        console.error("Error fetching quote:", error);
      });
  };

  fetchQuote(); // load once on page load
  button.addEventListener("click", fetchQuote); // load on button click
});
