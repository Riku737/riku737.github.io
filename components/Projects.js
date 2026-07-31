class ProjectBox extends HTMLElement {
	connectedCallback() {

        const getAttr = (a) => DOMPurify.sanitize(this.getAttribute(a));

        const p = {
            name: getAttr("name"),
            description: getAttr("description"),
            file: getAttr("file"),
            imgWebP: `assets/web/${getAttr("file")}`,
            imgAlt: `Asset for ${getAttr("name")}`,
            tools: getAttr("tools"),
            toolBox: getAttr("tools")
                .split(",")
                .map(t => `<tool-item tool="${t.trim()}" type="tool_image"></tool-item>`)
                .join("•"),
            subtitle: getAttr("subtitle"),
            demo_link: getAttr("demo_link"),
            github_link: getAttr("github_link"),
            link: getAttr("link"),
            award: getAttr("award")
        };

        if (p.demo_link && p.github_link && p.award) {
            this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
						<div class="project_thumbnail_boundaries">
							<img 
								class="project_image lazyload"
								src="${p.imgWebP}" 
								alt="${p.imgAlt}"
								decoding="async"
								referrerpolicy="no-referrer"
							>
						</div>
						<div class="project_details">
						    <div>
                                <p class="text_chip"><i class="bi bi-trophy-fill"></i> ${p.award}</p>    
                                <h4 class="project_name">${p.name}</h4>
                                <p class="p_description">${p.description}</p>
                            </div>
							<div class="tool_box">
								${p.toolBox}
							</div>
							<div class="project_buttons">
								<a class="primary_button"  href="${p.demo_link}" target="_blank">Demo</a>
								<a class="secondary_button"  href="${p.github_link}" target="_blank">Source code</a>
							</div>
						</div>
					</div>
				</div>
				`;
        } else if (p.demo_link && p.github_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
						<div class="project_thumbnail_boundaries">
							<img 
								class="project_image lazyload"
								src="${p.imgWebP}" 
								alt="${p.imgAlt}"
								decoding="async"
								referrerpolicy="no-referrer"
							>
						</div>
						<div class="project_details">
						    <div>
                                <h4 class="project_name">${p.name}</h4>
                                <p class="p_description">${p.description}</p>
                                <div class="tool_box">
                                    ${p.toolBox}
                                </div>
                            </div>    
							<div class="project_buttons">
								<a class="primary_button"  href="${p.demo_link}" target="_blank">Demo</a>
								<a class="secondary_button"  href="${p.github_link}" target="_blank">Source code</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (p.link && p.demo_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
						<div class="project_thumbnail_boundaries">
							<img 
								class="project_image lazyload"
								src="${p.imgWebP}" 
								alt="${p.imgAlt}"
								decoding="async"
								referrerpolicy="no-referrer"
							>
						</div>
						<div class="project_details">
						    <div>
                                <h4 class="project_name">${p.name}</h4>
                                <p class="p_description">${p.description}</p>
                                <div class="tool_box">
                                    ${p.toolBox}
                                </div>
                            </div>    
							<div class="project_buttons">
								<a class="primary_button"  href="${p.demo_link}" target="_blank">Demo</a>
								<a class="secondary_button"  href="${p.link}" target="_blank">Presentation</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (p.demo_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
						<div class="project_thumbnail_boundaries">
							<img 
								class="project_image lazyload"
								src="${p.imgWebP}" 
								alt="${p.imgAlt}"
								decoding="async"
								referrerpolicy="no-referrer"
							>
						</div>
						<div class="project_details">
						    <div>
                                <h4 class="project_name">${p.name}</h4>
                                <p class="p_description">${p.description}</p>
                                <div class="tool_box">
                                    ${p.toolBox}
                                </div>
                            </div>
							<div class="project_buttons">
								<a class="secondary_button"  href="${p.demo_link}" target="_blank">Demo</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (p.github_link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
						<div class="project_thumbnail_boundaries">
							<img 
								class="project_image lazyload"
								src="${p.imgWebP}" 
								alt="${p.imgAlt}"
								decoding="async"
								referrerpolicy="no-referrer"
							>
						</div>
						<div class="project_details">
						    <div>
                                <h4 class="project_name">${p.name}</h4>
                                <p class="p_description">${p.description}</p>
                                <div class="tool_box">
                                    ${p.toolBox}
                                </div>
							</div>
							<div class="project_buttons">
								<a class="secondary_button"  href="${p.github_link}" target="_blank">Source code</a>
							</div>
						</div>
					</div>
				</div>
				`;
		} else if (p.link) {
			this.innerHTML = `
				<div class="projects_box">
					<div class="project_link">
						<div class="project_thumbnail_boundaries">
							<img 
								class="project_image lazyload"
								src="${p.imgWebP}" 
								alt="${p.imgAlt}"
								decoding="async"
								referrerpolicy="no-referrer"
							>
						</div>
						<div class="project_details">
						    <div>
                                <h4 class="project_name">${p.name}</h4>
                                <p class="p_description">${p.description}</p>
                                <div class="tool_box">
                                    ${p.toolBox}
                                </div>
                            </div>
							<div class="project_buttons">
								<a class="secondary_button"  href="${p.link}" target="_blank">Presentation</a>
							</div>
						</div>
					</div>
				</div>
				`;
		}

	}
}

customElements.define("project-box", ProjectBox);
