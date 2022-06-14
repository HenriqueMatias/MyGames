import WebCore from '../../../../webcore/index.js';
const {Card} = WebCore.Presentation.components;
const {createElement} = WebCore.DOMHelper;
const PageModel = WebCore.models.PageModel;

export class SelectLocalPlayersPage extends PageModel {
    constructor(params, navigator) {
        super(params, navigator)
        this.elem = createElement('div');
        this.elem.setAttribute('id', 'SelectLocalPlayersPage');
        this.setStyle();
    }

    setStyle() {
        this.elem.classList.add('select-local-players');
    }

    getPlayersData() {
        const playersData = [
            {
                name: "Sr. Edson",
                imageSrc: "./images/grandpa.png",
            },
            {
                name: "Sofia",
                imageSrc: "./images/teacher.jpg",
            },
            {
                name: "Pedro",
                imageSrc: "./images/student.jpg",
            },
        ];
        return playersData;
    }

    renderTitle() {
        const gameTitle = createElement('h2');
        gameTitle.textContent = "Choose the player1 avatar:";
        return gameTitle;
    }

    renderPlayer(player) {
        const card = new Card();
        card.classList.add('box', 'w3-white', 'box2' )
        const img = createElement('img');
        img.setAttribute('src', player.imageSrc);
        img.style="width: 100%;"
        img.classList.add('player-selection-img')
        const playerName = createElement('h2');
        playerName.classList.add('w3-center')
        playerName.textContent = player.name;
        
        card.headerContent = playerName
        card.appendChild(img);
        return card.render();
    }

    renderPlayerSelector() {
        const playersContainer = createElement('div');
        playersContainer.classList.add('player-selection-container')
        for (const player of this.getPlayersData()) {
            playersContainer.appendChild(this.renderPlayer(player));
        }
        return playersContainer;
    }

    render() {
        this.elem.appendChild(this.renderTitle());
        this.elem.appendChild(this.renderPlayerSelector());

        return this.elem;
    }

}