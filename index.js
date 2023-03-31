function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(Response => Response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
        <article class="cardPersonajes">
            <div>
                <img src="${personaje.image}" alt="Personaje">
            </div>
            <h5>${personaje.name}</h5>
            <span>${personaje.status}</span>
        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
        
    });
})