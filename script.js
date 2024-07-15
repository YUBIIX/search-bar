const searchBar = document.getElementById("search-bar");
const resultsDiv = document.getElementById("search-results");

searchBar.addEventListener("keyup", function() {
  const searchQuery = searchBar.value.toLowerCase(); // Get the search query

  // Simulate search functionality (replace with your actual search logic)
  constsearchResults = ["Item 1", "Item 2", "Item 3"]; // Example results

  resultsDiv.innerHTML = ""; // Clear previous results

  if (searchResults.length > 0) {
    let resultList = "<ul>";
    for (const result of searchResults) {
      resultList += `<li>${result}</li>`;
    }
    resultList += "</ul>";
    resultsDiv.innerHTML = resultList;
  } else {
    resultsDiv.innerHTML = "<p>No results found.</p>";
  }
});