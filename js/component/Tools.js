class Tools extends HTMLElement {
    connectedCallback() {
        const tool = this.getAttribute('tool');
        const type = this.getAttribute('type');
        const src = `assets/icons/${tool}.png`;
        this.innerHTML = `
            <img class="${type}" src="${src}" alt="${tool}" title="${tool}">
        `;
    }
}

customElements.define('tool-item', Tools);