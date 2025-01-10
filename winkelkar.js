if (window.location.pathname.includes("winkelkar.html")) {
    const winkelkarLijst = document.getElementById("winkelkarlijst");
    const totaalPrijsElement = document.getElementById("totaalprijs");

    function toonWinkelkar() {
        // Haal de winkelkar op uit localStorage
        const winkelkar = JSON.parse(localStorage.getItem("winkelkar")) || [];
        
        // Leeg de lijst eerst
        winkelkarLijst.innerHTML = '';
        
        // Variabele voor totale prijs
        let totaalPrijs = 0;

        winkelkar.forEach((product) => {
            // Maak een lijstitem voor elk product
            const productItem = document.createElement("li");
            productItem.innerHTML = `
                <img src="${product.afbeelding}" class="printerAfbeelding">
                <div>
                    <h3>${product.naam}</h3>
                    <p>${product.prijs}</p>
                </div>
            `;
            winkelkarLijst.appendChild(productItem);

            // Bereken de totale prijs
            const prijs = parseFloat(product.prijs.replace('€', '').replace(',', '.'));
            totaalPrijs += prijs;
        });

        // Toon de totale prijs
        totaalPrijsElement.textContent = `Totaal: €${totaalPrijs.toFixed(2)}`;
    }

    // Toon de winkelkar bij het laden van de pagina
    toonWinkelkar();
}
