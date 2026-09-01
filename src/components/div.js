import { Utils } from "./utils";

export class Div{
    constructor(vertical = false){
        this.className = Utils.randomClassName(10);
        this.element = null;
        this.components = [];
        this.vertical = vertical;
    }

    push(component){
        this.components.push(component);
    }

    render(){
        let result = '';
        for (let component of this.components) {
            result += component.render();
        }
        return `<div class="div_div ${this.className} ${this.vertical ? 'div-vertical' : 'div-horizontal'}">${result}</div>`;
    }
    
    run(){
        if (this.element == null) {
            this.element = document.querySelector(`.${this.className}`);
        }
        
        for (let component of this.components) {
            component.run();
        }

    }

    show(visible) {

        console.log('div', this.element);
        this.element.style.display = visible ? 'block' : 'none';
    }
    
}
