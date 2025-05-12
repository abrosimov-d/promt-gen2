import { Utils } from "../components/utils";

export class PromtTextarea {
	constructor(title, callback) {
		this.title = title;
		this.promtTextareaClassName = Utils.randomClassName(12); 
		this.counterClassName = Utils.randomClassName(12);
        this.promtTextarea = null;
        this.counter = null;
        this.callback = callback;
	}

    run() {
        if (this.promtTextarea == null) {
            this.promtTextarea = document.querySelector('.'+this.promtTextareaClassName);
        }
        if (this.counter == null) {
            this.counter = document.querySelector('.'+this.counterClassName);
        }
        this.promtTextarea.addEventListener('input', () =>{
            this.callback('promt-changed', this.promtTextarea.value);
            this.updateCounter();
        });
    }
    
	render() {
		return `
        <div class="promt-textarea">   
            <div>${this.title}</div>
            <div class='${this.counterClassName}'></div>
        </div>
        <textarea class='${this.promtTextareaClassName}'></textarea>

        `
	}

    getText() {
        if (this.promtTextarea == null) {
            this.promtTextarea = document.querySelector('.' + this.promtTextareaClassName);
        }
        return this.promtTextarea.value;
    }
    setText(text) {
        if (this.promtTextarea == null) {
            this.promtTextarea = document.querySelector('.' + this.promtTextareaClassName);
        }
        this.promtTextarea.value = text;
        this.updateCounter();
    }

    updateCounter() {
        this.counter.innerHTML = ' (' + this.promtTextarea.value.length + ')';  
    }
}

