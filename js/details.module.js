import { Ui } from './ui.module.js';

export class Details {
    constructor(id) {
        this.ui = new Ui();
        this.getDetails(id);

        document.addEventListener("click", function (e) {
            if (e.target.id === "close") {
                document.querySelector(".section").classList.remove("d-none");
                document.querySelector(".overlay").classList.add("d-none");
                document.querySelector(".overlay").innerHTML = "";
            }
        });
    }

    async getDetails(id) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
            this.ui.displayDetails(result);
            document.querySelector(".overlay").classList.remove("d-none");
            document.querySelector(".section").classList.add("d-none");
        } catch (error) {
            console.error("Error fetching game details:", error);
        } finally {
            loading.classList.add("d-none");
        }
    }
}
