class Tools extends HTMLElement {
	connectedCallback() {
		const tool = DOMPurify.sanitize(this.getAttribute("tool"));
		const type = DOMPurify.sanitize(this.getAttribute("type"));
		const src = `assets/icons/${tool}.png`.toLowerCase();
		this.innerHTML = `
            <div class="tool_item" title="${tool}">
                <img class="${type}" src="${src}" alt="${tool}" title="${tool}">
                <span class="tool_name">${tool}</span>
            </div>
        `;
	}
}

customElements.define("tool-item", Tools);
