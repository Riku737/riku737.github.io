class Experience extends HTMLElement {
	connectedCallback() {
		const company = DOMPurify.sanitize(this.getAttribute("company"));
		const link = DOMPurify.sanitize(this.getAttribute("link"));
		const logo = DOMPurify.sanitize(this.getAttribute("logo"));
		const title = DOMPurify.sanitize(this.getAttribute("title"));
		const location = DOMPurify.sanitize(this.getAttribute("location"));
		const start = DOMPurify.sanitize(this.getAttribute("start"));
		const end = DOMPurify.sanitize(this.getAttribute("end"));

		this.innerHTML = `
        <div class="experience_box">
            <div class="logo_box">
                <img class="logo_experience" alt="experience_logo" loading="lazy" src="assets/icons/${logo}" title="${company}">
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

customElements.define("experience-item", Experience);
