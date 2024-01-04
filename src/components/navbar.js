class NavBar extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        // base do component
        const componentRoot = document.createElement('header');
        componentRoot.setAttribute('class', 'card');

        const aLeft = document.createElement('a');
        aLeft.setAttribute('class', 'logo');
        aLeft.textContent = this.getAttribute('img');

        const logoImage = document.createElement('img');
        logoImage.src = this.getAttribute('photo') || 'assets/invader.png';

        const aRight = document.createElement('a');
        aRight.setAttribute('class', 'origem');
        aRight.textContent = this.getAttribute('texto');
        aRight.href = this.getAttribute('link-url');

        // estilizar o component
        const style = document.createElement('style');
        style.textContent = `
            header{
                background: #ffffff30;
                width: 100vw;
                height: 70px;
                display: flex;
                justify-content: space-between;                
            }
            img {
                height: 60px;
            }
            a {                
                text-decoration: none;
                color: #fff;
                margin: auto 50px;
            }
        `;

        aLeft.appendChild(logoImage);
        componentRoot.appendChild(aLeft);
        componentRoot.appendChild(aRight);

        // enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('nav-bar', NavBar);