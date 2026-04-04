class ProjectBox extends HTMLElement {
	connectedCallback() {
		const date = DOMPurify.sanitize(this.getAttribute("date"));
		const name = DOMPurify.sanitize(this.getAttribute("name"));
		const description = DOMPurify.sanitize(
			this.getAttribute("description"),
		);
		const link = DOMPurify.sanitize(this.getAttribute("link"));

		const file = DOMPurify.sanitize(this.getAttribute("file"));
		const imgWebP = "assets/web/" + file;
		// console.log("Image source:", imgWebP);
		const imgAlt = "Asset for " + name;

		const tools = DOMPurify.sanitize(this.getAttribute("tools"));
		const toolsArray = tools.split(",");
		let toolbox = "";

		toolsArray.forEach((tool) => {
			toolbox += `<tool-item tool="${tool}" type="tool_image"></tool-item>`;
		});

		this.innerHTML = `
            <div class="projects_box">
                <a class="project_link" href="${link}" target="_blank">
                    <div class="project_thumbnail_boundaries">
                        <img 
                            class="project_image lazyload"
                            src="${imgWebP}" 
                            alt="${imgAlt}"
                            decoding="async"
                            referrerpolicy="no-referrer"
                        >
                    </div>
                    <div class="project_details">
                    <p class="project_date">${date}</p>    
                        <h4>${name}</h4>
                        <div class="tool_box">
                            ${toolbox}
                        </div>
                    </div>
                </a>
            </div>
            `;
	}
}

class ChipText extends HTMLElement {
	connectedCallback() {
		const message = DOMPurify.sanitize(this.getAttribute("text"));
		this.innerHTML = `
        <span class="text_chip">${message}</span>
        `;
	}
}

customElements.define("project-box", ProjectBox);
customElements.define("chip-text", ChipText);
