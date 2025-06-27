class Experience extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        var e_company = this.getAttribute('company');
        var e_link = this.getAttribute('link');
        var e_logo = this.getAttribute('logo');
        var e_title = this.getAttribute('title');
        var e_location = this.getAttribute('location');
        var e_start = this.getAttribute('start');
        var e_end = this.getAttribute('end');

        this.innerHTML = `
        <div class="experience_box">
            <div class="logo_box">
                <img class="logo_experience" alt="experience_logo" src="assets/${e_logo}" title="${e_company}">
            </div>
            <div class="experience_box_details">
                <div class="experience_box_left">
                    <h4 id="title_text">${e_title}</h4>
                    <a class="experience_link" href="${e_link}" target="_blank">${e_company}</a>
                </div>
                <div class="experience_box_right">
                    <p id="title_text">${e_start} - ${e_end}</p>
                    <p>${e_location}</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('experience-item', Experience);