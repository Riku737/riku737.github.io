class ProjectBox extends HTMLElement {
	connectedCallback() {
		// const date = DOMPurify.sanitize(this.getAttribute("date"));
		const name = DOMPurify.sanitize(this.getAttribute("name"));
		const description = DOMPurify.sanitize(this.getAttribute("description"));

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

		const subtitle = DOMPurify.sanitize(this.getAttribute("subtitle"));
		const demo_link = DOMPurify.sanitize(this.getAttribute("demo_link"));
		const github_link = DOMPurify.sanitize(this.getAttribute("github_link"));
		const link = DOMPurify.sanitize(this.getAttribute("link"));

		if (demo_link && github_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
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
							<h4 class="project_name">${name}</h4>
							<p class="project_date">${subtitle}</p>
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${link}" target="_blank">Demo</a>
								<a class="link_button"  href="${link}" target="_blank">GitHub</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (link && demo_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
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
							<h4 class="project_name">${name}</h4>
							<p class="project_date">${subtitle}</p>
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${link}" target="_blank">Demo</a>
								<a class="link_button"  href="${link}" target="_blank">Behance</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (demo_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
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
							<h4 class="project_name">${name}</h4>
							<p class="project_date">${subtitle}</p>
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${link}" target="_blank">Demo</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (github_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
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
							<h4 class="project_name">${name}</h4>
							<p class="project_date">${subtitle}</p>
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${link}" target="_blank">GitHub</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
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
							<h4 class="project_name">${name}</h4>
							<p class="project_date">${subtitle}</p>
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${link}" target="_blank">Behance</a>
							</div>
						</div>
					</div>
				</div>
				`;
		}

	}
}

// <p class="project_date">${date}</p>

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
