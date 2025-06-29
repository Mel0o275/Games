import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

const ui = new Ui();

export class Games {
    constructor() {
        this.getGame("mmorpg");

        document.querySelectorAll(".nav-item").forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll(".nav-item .active").forEach(el => el.classList.remove("active"));
                e.target.classList.add("active");
                const genre = e.target.dataset.genre;
                this.getGame(genre);
            });
        });
    }

    async getGame(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9133037913msh48ddc4b7eb43089p128de5jsn8b9cbae35fe9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            ui.displayGames(result);

            document.querySelectorAll(".outer").forEach(card => {
                card.addEventListener("click", () => {
                    const gameId = card.getAttribute("data-id");
                    this.showDetails(gameId);
                });
            });

        } catch (error) {
            console.error("Failed to fetch games:", error);
        } finally {
            loading.classList.add("d-none");
        }
    }

    showDetails(id) {
        document.querySelector(".overlay").classList.remove("d-none");
        new Details(id);
    }
}
