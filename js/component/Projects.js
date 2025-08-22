class ProjectBox extends HTMLElement {
    connectedCallback() {
        const date = DOMPurify.sanitize(this.getAttribute('date'));
        const name = DOMPurify.sanitize(this.getAttribute('name'));
        const description = DOMPurify.sanitize(this.getAttribute('description'));
        const link = DOMPurify.sanitize(this.getAttribute('link'));

        const file = DOMPurify.sanitize(this.getAttribute('file'));
        const imgWebP = 'assets/web/' + file + '.webp';
        console.log('Image source:', imgWebP);

        const imgAlt = 'Asset for ' + name;

        const tools = DOMPurify.sanitize(this.getAttribute('tools'));
        const toolsArray = tools.split(',');
        let toolbox = '';

        toolsArray.forEach(tool => {
            toolbox += `<tool-item tool="${tool}" type="tool_image"></tool-item>`;
        });

        const type = DOMPurify.sanitize(this.getAttribute('type'));
        const status = DOMPurify.sanitize(this.getAttribute('status'));

        if (type === "video") {
            const videoWebM = 'assets/web/' + file + '.webm';
            this.innerHTML = `
            <div class="projects_box">
                <a class="project_link" href="${link}" target="_blank">
                    <div class="highlight_thumbnail">
                        <video class="project_image_highlight highlight_thumbnail" muted id="highlight_cover_1" poster="${imgWebP}" alt="${imgAlt}">
                            <source src="${videoWebM}" type="video/webm">
                        </video>
                    </div>
                    <div class="project_details">
                        <p class="project_date">${date}</p>
                        <h4>${name}</h4>
                        <p>${description}</p>
                        <div class="tool_box">
                            ${toolbox}
                        </div>
                    </div>
                </a>
            </div>
            `;
        } else if (status == "NEW" || status == "WIP") {
            this.innerHTML = `
                <div class="projects_box">
                    <a class="project_link" href="${link}" target="_blank">
                        <div class="project_thumbnail_boundaries">
                            <img class="project_image" src="${imgWebP}" alt="${imgAlt}">
                        </div>
                        <div class="project_details">
                            <p class="project_date">${date}</p>
                            <h4><chip-text text="${status}"></chip-text> ${name}</h4>
                            <p>${description}</p>
                            <div class="tool_box">
                                ${toolbox}
                            </div>
                        </div>
                    </a>
                </div>
                `;
        } else if (status == "LinkedIn") {
            this.innerHTML = `
                <div class="projects_box">
                    <a class="project_link" href="${link}" target="_blank">
                        <div class="project_thumbnail_boundaries">
                            <img class="project_image" src="${imgWebP}" alt="${imgAlt}">
                        </div>
                        <div class="project_details">
                            <p class="project_date">${date}</p>
                            <h4>${name}</h4>
                            <p>${description}</p>
                            <div class="tool_box">
                                ${toolbox}
                            </div>
                        </div>
                    </a>
                </div>
                `;
        } else {
            this.innerHTML = `
            <div class="projects_box">
                <a class="project_link" href="${link}" target="_blank">
                    <div class="project_thumbnail_boundaries">
                        <img class="project_image" src="${imgWebP}" alt="${imgAlt}">
                    </div>
                    <div class="project_details">
                    <p class="project_date">${date}</p>    
                        <h4>${name}</h4>
                        <p>${description}</p>
                        <div class="tool_box">
                            ${toolbox}
                        </div>
                    </div>
                </a>
            </div>
            `;
        }
    }
}

class ChipText extends HTMLElement {
    connectedCallback() {
        const message = DOMPurify.sanitize(this.getAttribute('text'));
        this.innerHTML = `
        <span class="text_chip">${message}</span>
        `;
    }
}

customElements.define('project-box', ProjectBox);
customElements.define('chip-text', ChipText);