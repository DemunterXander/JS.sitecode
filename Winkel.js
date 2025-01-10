import { allePrinters } from "./Printer.js";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form.zoekTekst > input').addEventListener('input', zoekPrinters);
});


// footer toevoegen
document.body.insertAdjacentHTML('beforeend', '<footer><p>&copy; 3D-printer webshop</p></footer>')


// sorteren op printers etc. met checkboxes
document.addEventListener("DOMContentLoaded", () => {
    const printerList = document.querySelector('.printerList');
    const checkboxes = document.querySelectorAll('.filtering input[type="checkbox"]');

    


    function laatPrintersZien() {
        printerList.innerHTML = '';

        // Controleer actieve filters en haal geselecteerde items op
        const actieveFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id);

        // Filter items op basis van actieve filters
        const filterAlleItems = allePrinters.filter(printer => actieveFilters.includes(printer.categorie));

        // Voeg elke printer toe aan de lijst
        filterAlleItems.forEach(function (printer) {
            const printerItem = document.createElement('li');
            printerItem.classList.add('allePrinters');

            printerItem.innerHTML = 
            `<h3>${printer.naam}</h3>  
            <div class="afbBeschrijving">
                <img src="${printer.afbeelding}" class="printerAfbeelding">  
                <p class="beschrijving"  >${printer.beschrijving}</p> 
            </div>
                <p>${printer.prijs}</p> 
                <button>kopen</button>
            `;

            printerList.appendChild(printerItem);
        });
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('change', laatPrintersZien));

    // Laat alle printers zien bij het laden van de pagina
    laatPrintersZien();
});


// zoeken van producten
function zoekPrinters() {
    const zoekTerm = document.querySelector('form.zoekTekst > input').value.toLowerCase();

    // Leeg de lijst voordat je nieuwe resultaten toevoegt
    document.querySelector('ul.printerList').innerHTML = '';

    // Doorloop de array van alle printers en zoek op naam of beschrijving
    allePrinters.forEach(printer => {
        if (
            //zoekt de naam van een product 
            printer.naam.toLowerCase().includes(zoekTerm) 
        ) {
            const printerList = document.querySelector('ul.printerList');
            const printerItem = document.createElement('li');
            printerItem.classList.add('allePrinters');

            printerItem.innerHTML = `<img src="${printer.afbeelding}" class="printerAfbeelding"> <h3>${printer.naam}</h3> <p>${printer.prijs}</p> <p>${printer.beschrijving}</p>`;

            printerList.appendChild(printerItem);
        }
    });
}




