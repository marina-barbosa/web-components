

class Button extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // base do componente
        const componentRoot = document.createElement('button');
        componentRoot.textContent = ' ';

        // estilizar o componente
        const style = document.createElement('style');
        style.textContent = `
            button {
                width: 100px;
                height: 30px;
                border: 2px solid #111;
                border-radius: 5px;
                color: #fa71ad;
                font-weight: bold;
            }
        `;

        // adicionar comportamento ao botão
        // componentRoot.addEventListener('click', () => {
        //     alert('Botão clicado!');
        // });


        // enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('but-ton', Button);
