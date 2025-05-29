import { Utils } from "./utils";

export class Dropdown{
    constructor(template, callback){
        this.template = template;
        this.callback = callback;
        this.className = Utils.randomClassName(10);
        this.element = null;
    }

    render(){
        let result = '';
        let items = this.template.split('|');
        for (let item of items) {
            result += `<option value="${item}">${item}</option>`;
        }
        return `<select class="${this.className}">${result}</select>`;
    }

    run(){
        if (this.element == null) {
            this.element = document.querySelector(`.${this.className}`);
        }
        
    }

    getSelectedValue(){
        return this.element.value;
    }

    setSelectedValue(value){
        this.element.value = value;
    }
    
}