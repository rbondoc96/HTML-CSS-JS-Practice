window.addEventListener("DOMContentLoaded", async (event) => {
    const tas = await TypeAheadSearcher.create();
});

class TypeAheadSearcher {
    constructor() {
        this.endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        this.places = [];
        window.TypeAheadSearcher = {};

        this.list = document.querySelector(".search-form ul.suggestions")
        this.input = document.querySelector(".search-form input");
        this.input.addEventListener("keyup", this.displayMatches.bind(this));
    }

    async initialize() {
        const response = await fetch(this.endpoint);
        const data = await response.json();
        this.places.push(...data);
    }

    static async create() {
        const obj = new TypeAheadSearcher();
        await obj.initialize();
        return obj;
    }    

    displayMatches(event) {
        const target = event.currentTarget;
        const matches = this.findMatches(target.value);
        const html = matches.map(match => {
            const regex = new RegExp(target.value, "gi");
            const cityName = match.city.replace(regex, 
                `<span class="hl">${target.value}</span>`
            );
            const stateName = match.state.replace(regex, 
                `<span class="hl">${target.value}</span>`
            );

            return `<li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${match.population}</span>
            </li>`
        }).join("");

        this.list.innerHTML = html;
    }

    findMatches(wordToMatch) {
        return this.places.filter(place => {
            const cityState = `${place.city}, ${place.state}`;
            const regex = new RegExp(wordToMatch, "gi");
            return cityState.match(regex);
        });
    }
}