class Tools extends HTMLElement {
    connectedCallback() {
        const tool = DOMPurify.sanitize(this.getAttribute('tool'));
        const type = DOMPurify.sanitize(this.getAttribute('type'));
        const src = `assets/icons/${tool}.png`.toLowerCase();
        this.innerHTML = `
            <img class="${type}" src="${src}" alt="${tool}" title="${tool}">
        `;
    }
}

customElements.define('tool-item', Tools);