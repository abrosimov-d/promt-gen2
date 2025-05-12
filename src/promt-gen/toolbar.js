export class Toolbar {
    constructor(template, callback) {
        this.toolbar = null;
        this.template = template;
        this.callback = callback;
    }

    render() {
        let inner = '';
        this.template.split('|').forEach(part => {
            if (part[0] == '_') {
                inner += `<input class="toolbar-input ${part}"></input>`
            } else {
                inner += `<button class="toolbar-button">${part}</button>`
            }
        })
        return `<div class="toolbar">${inner}</div>`;
    }

    run() {
        this.toolbar = document.querySelector('.toolbar');
        this.toolbar.addEventListener('click', (event) => {
            this.callback('toolbar', event.target.textContent);
        })
    }

    setElementText(element, text) {
        this.element = document.querySelector('.' + element);
        this.element.value = text;
    }

    getElementText(element) {
        this.element = document.querySelector('.' + element);
        return this.element.value;
    }
}
