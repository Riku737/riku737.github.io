class ProjectBox extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');
        const description = this.getAttribute('description');
        const link = this.getAttribute('link');

        const file =  this.getAttribute('file');
        const imgWebP = 'assets/web/' + file + '.webp';
        const imgPNG = 'assets/thumbnails/' + file + '.png';

        const imgAlt = 'Asset for ' + name;
        
        const tools =  this.getAttribute('tools');
        const toolsArray = tools.split(',');
        var toolbox = '';
        
        toolsArray.forEach(tool => {
            toolbox += `<tool-item tool="${tool}" type="tool_image"></tool-item>`;
        });

        const type =  this.getAttribute('type') ?? 'image';

        if (type === "video") {
            const videoWebM =  'assets/web/' + file + '.webm';
            const videoMP4 =  'assets/' + file + '.mp4';
            this.innerHTML = `
            <a class="project_link" href="${link}" target="_blank" id="thumbnail_highlight_1">
                <figure class="highlight_thumbnail" id="highlight_thumbnail_1">
                    <video class="project_image_highlight" muted id="highlight_cover_1" poster="${imgPNG}" alt="${imgAlt}">
                        <source src="${videoWebM}" type="video/webm">
                        <source src="${videoMP4}" type="video/mp4">
                    </video>
                </figure>

                <div class="project_details">
                    <h4>${name}</h4>
                    <p>${description}</p>
                    <div class="tool_box">
                        ${toolbox}
                    </div>
                </div>
            </a>
            `;

        } else {
            this.innerHTML = `
                <div class="projects_box">
                    <a class="project_link" href="${link}" target="_blank">
                        <figure class="project_thumbnail_boundaries">
                            <picture>
                                <source srcset="${imgWebP}" type="image/webp">
                                <source srcset="${imgPNG}" type="image/png">
                                <img class="project_image" src="${imgPNG}" alt="${imgAlt}">
                            </picture>
                        </figure>
                        <div class="project_details">
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

customElements.define('project-box', ProjectBox);