

class SimpleCard extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement('div');

        const title = document.createElement('p');
        title.textContent = `WriteLn('hello world!');`;

        const buttonHello = document.createElement('but-ton');

        componentRoot.appendChild(title);
        componentRoot.appendChild(buttonHello);

        // comportamento
        function randomHelloWorld() {

            const printMessages = [
                "console.log", // JavaScript
                "print", // Python
                "System.out.println", // Java
                "echo", // Bash
                "println", // Rust
                "echo", // PHP
                "puts", // Ruby
                "fmt.Println", // Go
                "console.log", // Node.js
                "fmt.Println" // Golang
            ];

            const helloWorldArray = [
                'Hello World!', // Inglês
                'Hola Mundo!', // Espanhol
                'Bonjour le monde!', // Francês
                'Ciao mondo!', // Italiano
                'Olá Mundo!', // Português
                'Hallo Welt!', // Alemão
                'नमस्ते दुनिया!', // Hindi (Índia)
                'مرحبا بالعالم!', // Árabe
                '你好，世界！', // Chinês (Simplificado)
                'こんにちは、世界！' // Japonês
            ];

            const randomLanguageIndex = Math.floor(Math.random() * printMessages.length);
            const randomHelloIndex = Math.floor(Math.random() * helloWorldArray.length);

            const selectedLanguage = printMessages[randomLanguageIndex];
            const selectedHelloMessage = helloWorldArray[randomHelloIndex];

            return `${selectedLanguage}('${selectedHelloMessage}')`;
        }

        function changeTitle(){
            const msg = randomHelloWorld();
            title.textContent = msg;
        }

        buttonHello.addEventListener('click', changeTitle);

        return componentRoot;
    }


    styles() {
        const style = document.createElement('style');

        style.textContent = `
         div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 600px;
            height: 300px;
            background: #ffffff30;
            border: 2px solid #111;
            border-radius: 8px;
            box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
         }

         p {
            text-align: center;
            font-weight: bold;
            width: 90%;                                
         }

         but-ton {
            margin-bottom: 50px;
        }

         @media screen and (max-width: 632px) {
            div {
                width: 90vw;
            }
        }
         
        `;

        return style;
    }

}

customElements.define('simple-card', SimpleCard);