
import WebCore from '../../../../webcore/index.js';
const {Form, Board, ScoreBoard, Square, ModalPage} = WebCore.Presentation.components;

export default function render() {

}

function createForm() {
    let form = new Form()
    const name1Input = createInput({name:"playerOneName", classList:["w3-input"]})
    const name1Label = createElement('label')
    const name2Label = createElement('label')
    const name2Input = createInput({name:"playerTwoName", classList:["w3-input"]})
    const button = createElement('button');
    button.classList.add('button')
    button.type = "submit"
    button.innerHTML = "Start Game";
    

    name1Label.textContent = "Player One"
    name2Label.textContent = "Player Two"
    form.appendChild(name1Input);
    form.appendChild(name1Label);
    form.appendChild(name2Input);
    form.appendChild(name2Label);
    form.appendChild(button);
    form.classList.add('custom-form', 'w2-container')

    form.onSubmit = (values) => {
        const newPlayers = [new Player(values["playerOneName"], "x"), new Player(values["playerTwoName"], "o") ];
        gameSessionStore.dispatch("addPlayers",{players: newPlayers});
        scoreBoard.render(newPlayers);
        modal.close();
    }
    return form;
}