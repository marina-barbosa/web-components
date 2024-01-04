class Footer extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // base do component
        const componentRoot = document.createElement('footer');
        const span = document.createElement('span');

        span.textContent = this.getAttribute('texto'); // prop

        // estilizar o component
        const style = document.createElement('style');
        style.textContent = `
            footer{
                width: 100vw;
                height: 70px;
                color: #fff;
                background: #ffffff30;
                display: flex;
                justify-content: center;
                align-items: center;
            }
           
        `;

        // enviar para shadow
        componentRoot.appendChild(span);
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('foo-ter', Footer);