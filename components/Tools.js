class Tools extends HTMLElement {
	connectedCallback() {

        const getAttr = (a) => DOMPurify.sanitize(this.getAttribute(a));

        const t = {
            name: getAttr("tool"),
            type: getAttr("type"),
            image: `./assets/icons/${getAttr("tool").toLowerCase()}.png`
        };

		if (t.type === 'skill_image') { // Skills section

			const img = new Image();
			img.src = t.image;

            // Tool icon and name
			img.onload = () => {
				this.innerHTML = `
					<div class="tool_item" title="${t.name}">
						<img
							class="${t.type} lazyload"
							src="${t.image}"
							alt="${t.name}"
							title="${t.name}"
						>
						<span class="tool_name">${t.name}</span>
					</div>
				`;
			};

            // Tool name only (no icon)
			img.onerror = () => {
				this.innerHTML = `
					<div class="tool_item" title="${t.name}">
						<span class="tool_name">${t.name}</span>
					</div>
				`;
			};

		} else { // Projects section

			this.innerHTML = `
				<div class="tool_item" title="${t.name}">
					   ${t.name}
				</div>
			`;

		}

	}
}

customElements.define("tool-item", Tools);
