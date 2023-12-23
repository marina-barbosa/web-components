class CardPro extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class','card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class','card_left');

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class','card_right');

        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anon');
        
        const linkTitle = document.createElement('a'); 
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');
        
        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || 'assets/photo-default.jpg';
        newsImage.alt = 'foto da noticia';

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent); 

        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');

        style.textContent = `
         .card {
            display: flex;
            width: 600px;
            height: 300px;
            border: 2px solid #111;
            border-radius: 8px;
            box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
         }

         .card_left {
            width: 40%;            
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            font-family: Segoe UI, sans serif;                        
         }

         a {
            text-decoration: none;
            color: #111;
            font-size: 2rem;
         }

         p {
            margin: 8px;
         }

         img{
            width: 100%;
            height: 100%;
            border-radius: 0 8px 8px 0;
         }
        `;

        return style;
    }
}

customElements.define('card-pro', CardPro);