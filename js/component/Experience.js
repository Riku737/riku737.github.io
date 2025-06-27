class Experience extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        var company = this.getAttribute('company');
        var link = this.getAttribute('link');
        var logo = this.getAttribute('logo');
        var title = this.getAttribute('title');
        var location = this.getAttribute('location');
        var start = this.getAttribute('start');
        var end = this.getAttribute('end');

        this.innerHTML = `
        <div class="experience_box">
            <div class="logo_box">
                <img class="logo_experience" alt="experience_logo" src="assets/${logo}" title="${company}">
            </div>
            <div class="experience_box_details">
                <div class="experience_box_left">
                    <h4 id="title_text">${title}</h4>
                    <a class="experience_link" href="${link}" target="_blank">${company}</a>
                </div>
                <div class="experience_box_right">
                    <p id="title_text">${start} - ${end}</p>
                    <p>${location}</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('experience-item', Experience);