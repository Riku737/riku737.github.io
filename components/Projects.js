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
        const award = DOMPurify.sanitize(this.getAttribute("award"));

        if (demo_link && github_link && award) {
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
						    <p class="text_chip"><i class="bi bi-trophy-fill"></i> ${award}</p>    
							<h4 class="project_name">${name}</h4>
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${demo_link}" target="_blank">Demo</a>
								<a class="link_button"  href="${github_link}" target="_blank">Source Code</a>
							</div>
						</div>
					</div>
				</div>
				`;
        } else if (demo_link && github_link) {
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
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${demo_link}" target="_blank">Demo</a>
								<a class="link_button"  href="${github_link}" target="_blank">Source Code</a>
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
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${demo_link}" target="_blank">Demo</a>
								<a class="link_button"  href="${link}" target="_blank">Presentation</a>
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
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${demo_link}" target="_blank">Demo</a>
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
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${github_link}" target="_blank">Source Code</a>
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
							<p>${description}</p>
							<div class="tool_box">
								${toolbox}
							</div>
							<div class="project_buttons">
								<a class="link_button"  href="${link}" target="_blank">Presentation</a>
							</div>
						</div>
					</div>
				</div>
				`;
		}

	}
}

customElements.define("project-box", ProjectBox);
