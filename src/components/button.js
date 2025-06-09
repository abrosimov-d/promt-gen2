import { Utils } from "./utils";

export class Button{
	constructor(text, callback){
		this.text = text;
		this.callback = callback;
        this.className = Utils.randomClassName(10);
        this.element = null;
	}
	
    render(){
		return `<button class="${this.className}">${this.text}</button>`;
	}

    run(){
        if (this.element == null) {
            this.element = document.querySelector(`.${this.className}`);
        }

        this.element.addEventListener('click', (e) => {
            this.callback('button', this.text);
        });
    }
    
    setEnabled(enabled) {
        this.element.disabled = !enabled;
    }
}
