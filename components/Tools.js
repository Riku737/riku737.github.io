class Tools extends HTMLElement {
	connectedCallback() {
		const tool = DOMPurify.sanitize(this.getAttribute("tool"));
		const type = DOMPurify.sanitize(this.getAttribute("type"));
		const src = `assets/icons/${tool.toLowerCase()}.png`;

		if (type === 'skill_image') {

			const img = new Image();
			img.src = src;

			img.onload = () => {
				this.innerHTML = `
					<div class="tool_item" title="${tool}">
						<img
							class="${type} lazyload"
							src="${src}"
							alt="${tool}"
							title="${tool}"
						>
						<span class="tool_name">${tool}</span>
					</div>
				`;
			};

			img.onerror = () => {
				this.innerHTML = `
					<div class="tool_item" title="${tool}">
						<span class="tool_name">${tool}</span>
					</div>
				`;
			};

		} else {
			this.innerHTML = `
				<div class="tool_item" title="${tool}">
					<img 
						class="${type} lazyload" 
						src="${src}" 
						alt="${tool}" 
						title="${tool}"
					>
				</div>
			`;
		}

	}
}

customElements.define("tool-item", Tools);
