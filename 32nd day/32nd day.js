document.addEventListener("DOMContentLoaded", () => {
  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("newQuoteBtn");

  const fetchQuote = () => {
    fetch("https://zenquotes.io/api/today")
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
  fetchQuote();
  button.addEventListener("click", fetchQuote);
});
