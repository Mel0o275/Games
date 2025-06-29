export class Ui {
    displayGames(game) {
        let cartona = ``;
        for (let i = 0; i < game.length; i++) {
            cartona += `
            <div class="col-md-3 mb-4" id="press">
                <div class="card outer border-1 border border-dark rounded-3" data-id="${game[i].id}">
                    <div class="inner p-3">
                        <img src="${game[i].thumbnail}" alt="" class="card-img-top" style="max-width: -webkit-fill-available;">
                        <div class="title d-flex justify-content-between">
                            <h5 class="mt-3">${game[i].title}</h5>
                            <div class="box">
                                <p class="mt-3">Free</p>
                            </div>
                        </div>
                        <div class="des text-center">
                            ${game[i].short_description.split(" ", 8).join(" ")}
                        </div>
                    </div>
                    <div class="info d-flex justify-content-between card-footer border-top-1">
                        <h5 class="m-0 box">${game[i].genre}</h5>
                        <p class="m-0 box">${game[i].platform}</p>
                    </div>
                </div>
            </div>
            `;
        }
        document.querySelector(".row").innerHTML = cartona;
    }

    displayDetails(id) {
        const cartonaa = `
        <div class="container">
            <header class="justify-content-between d-flex align-items-center">
                <h1 class="h3 py-4">Details Game</h1>
                <button class="close btn-close btn-close-white" id="close"></button>
            </header>
            <div class="row g-4">
                <div class="col-md-4">
                    <img src="${id.thumbnail}" class="w-100" alt="image details">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${id.title}</h3>
                    <p>Category: <span class="badge bg-info text-black"> ${id.genre}</span></p>
                    <p>Platform: <span class="badge bg-info text-black"> ${id.platform}</span></p>
                    <p>Status: <span class="badge bg-info text-black"> ${id.status}</span></p>
                    <p class="small">${id.description}</p>
                    <a class="btn btn-outline-warning text-white" target="_blank" href="${id.game_url}">Show Game</a>
                </div>
            </div>
        </div>
        `;
        document.querySelector(".overlay").innerHTML = cartonaa;
    }
}
