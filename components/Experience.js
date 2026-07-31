class Experience extends HTMLElement {
	connectedCallback() {

        const getAttr = (attr) => DOMPurify.sanitize(this.getAttribute(attr));

        const c = {
            company: getAttr("company"),
            logo: getAttr("logo"),
            title: getAttr("title"),
            location: getAttr("location"),
            start: getAttr("start"),
            end: getAttr("end")
        };

		this.innerHTML = `
            <div class="experience_box">
                <div class="logo_box">
                    <img 
                        class="logo_experience lazyload" 
                        alt="experience_logo" 
                        src="assets/icons/${c.logo}" 
                    >
                </div>
                <div class="experience_box_details">
                    <div class="experience_box_left">
                        <h4 id="title_text">${c.title}</h4>
                        <p class="experience_link">${c.company}</p>
                    </div>
                    <div class="experience_box_right">
                        <p id="title_text">${c.start} - ${c.end}</p>
                        <p>${c.location}</p>
                    </div>
                </div>
            </div>
        `;
	}
}

customElements.define("experience-item", Experience);
