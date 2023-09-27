document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    
    // Simuleer zoekresultaten (vervang dit met je eigen gegevens)
    const data = ["Resultaat 1", "Resultaat 2", "Resultaat 3", "Resultaat 4", "Resultaat 5"];

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredResults = data.filter(result => result.toLowerCase().includes(query));
        
        // Toon resultaten
        showResults(filteredResults);
    });

    function showResults(results) {
        searchResults.innerHTML = "";
        
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement("li");
                li.textContent = result;
                searchResults.appendChild(li);
            });
            searchResults.style.display = "block";
        } else {
            searchResults.style.display = "none";
        }
    }
});
