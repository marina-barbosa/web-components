class SimpleCard extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class','card');        
        
        const title = document.createElement('h1'); 
        title.setAttribute('class','title');
        title.textContent = this.getAttribute('title'); 

        componentRoot.appendChild(title);

        return componentRoot;
    }

    styles(){
        const style = document.createElement('style');

        style.textContent = `
         .card {
            display: flex;
            justify-content: center;
            width: 600px;
            height: 300px;
            background: #ffffff30;
            border: 2px solid #111;
            border-radius: 8px;
            box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
         }

         .title {
            width: 40%;
            font-family: Segoe UI, sans serif;
            margin-top: 70px;   
            margin-left: 8%;                     
         }
         
        `;

        return style;
    }
}

customElements.define('simple-card', SimpleCard);