/*  ELENCO DEI GIOCHI DI CIRCOLO IL FORTINO GAMES
    ------------------------------------------------
    Per aggiungere un gioco: copia un blocco { ... }, incollalo sotto
    (con una virgola tra un blocco e l'altro) e cambia i valori.
    L'ordine qui è l'ordine in cui compaiono nella home.

    titolo        Nome del gioco
    pagina        Il file del gioco (es. "nuovo-gioco.html" oppure "nuovo-gioco/index.html")
    copertina     Immagine della copertina (meglio verticale)
    genere        Una parola o due (es. "Giallo investigativo")
    ambientazione Dove e quando: una riga
    descrizione   Due righe di trama, senza spoiler
    difficolta    Da 1 (facile) a 5 (difficilissimo)
    durata        Es. "circa 2 ore". Lascia "" per non mostrarla
    uscita        Data di uscita "AAAA-MM-GG": per 30 giorni il gioco ha l'etichetta "Nuovo"
    salvataggio   Nome del salvataggio usato dal gioco (serve a mostrare "Caso risolto")
    risolto       Come capire dal salvataggio che il caso è chiuso
*/
window.GIOCHI = [
  {
    titolo: "Morto un presidente se ne fa un altro",
    pagina: "morto-un-presidente.html",
    copertina: "cover.jpg",
    genere: "Giallo investigativo",
    ambientazione: "Circolo Il Fortino, Marina di Pisa. Sabato sera, rigori in TV.",
    descrizione: "Il presidente del circolo è stato trovato morto. Sette sospettati, una notte di indagini e un solo colpevole da smascherare.",
    difficolta: 3,
    durata: "",
    uscita: "2026-11-06",
    salvataggio: "fortino-v5",
    risolto: s => !!(s && s.fin && (s.fin.done || s.fin.ok))
  }
];

/* Il prossimo gioco, ancora coperto dal telo in fondo alla pagina.
   Cambia il titolo quando vuoi; metti false per togliere il riquadro.
   copertina: l'immagine che si intravede sotto il telo (già sfocata apposta)
   targhetta: la scritta sul foglietto attaccato col nastro (metti "" per toglierlo) */
window.PROSSIMAMENTE = { titolo: "Titolo top secret", copertina: "prossimo.webp", targhetta: "Coming soon" };
