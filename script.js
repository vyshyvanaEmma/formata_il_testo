// Recupero degli elementi
const titolo = document.getElementById('titolo');
const inputDimensione = document.getElementById('inputDimensione');
const bottoneApplica = document.getElementById('applica');
const button = document.querySelector("#button");
const colorSelect = document.getElementById('color');
const grassettoCheckbox = document.getElementById('grassetto');
const corsivoCheckbox = document.getElementById('corsivo');
const sottolineatoCheckbox = document.getElementById('sottolineato');
button.disabled = true;

// Costruttore
Inizializza();
InizializzaStile();

// Funzioni
function InizializzaStile() {
    cambiaStile(); 
}

function Inizializza() {
    titolo.style.color = colorSelect.value;
}

function cambiaDimensione() {
    const dimensione = inputDimensione.value;
    titolo.style.fontSize = dimensione + 'px'; 
}

function cambiaColore() {
    const coloreSelezionato = colorSelect.value; 
    titolo.style.color = coloreSelezionato; 
}

function cambiaStile() {
    titolo.style.fontWeight = grassettoCheckbox.checked ? 'bold' : 'normal';
    titolo.style.fontStyle = corsivoCheckbox.checked ? 'italic' : 'normal';
    titolo.style.textDecoration = sottolineatoCheckbox.checked ? 'underline' : 'none';
}

// Gestione degli eventi
bottoneApplica.addEventListener('click', cambiaDimensione);
colorSelect.addEventListener('change', cambiaColore);
grassettoCheckbox.addEventListener('change', cambiaStile);
corsivoCheckbox.addEventListener('change', cambiaStile);
sottolineatoCheckbox.addEventListener('change', cambiaStile);
