const SITE_ROOT = window.location.origin + "/";

class NavBar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <header class="navigation_section" id="web_navigation_bar">

            <nav class="navigation_container">

                <div class="left_nav">
                    <a class="tertiary_button" id="home" href="${SITE_ROOT}">
                        Riki McAlear
                    </a>
                </div>

                <ul class="right_nav unstyled_list">
                    <li>
                        <a class="tertiary_button" id="menu_skill" href="${SITE_ROOT}#skills">Skills</a>
                    </li>
                    <li>
                        <a class="tertiary_button" id="menu_projects" href="${SITE_ROOT}#projects">Projects</a>
                    </li>
                    <li>
                        <a class="tertiary_button" id="menu_experience" href="${SITE_ROOT}#experience">Experience</a>
                    </li>
                        <a class="tertiary_button" id="menu_about" href="${SITE_ROOT}#about">About</a>
                    <li>
                        <a class="secondary_button" id="menu_contact" href="${SITE_ROOT}#contact" style="background-color: inherit;">Contact</a>
                    </li>
                </ul>
                
                <button class="menu_button_nav" id="mobile_nav_button" onclick="mobile_navigation()" title="menu">
                    <svg id="hamburger_icon" class="menu_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <svg id="close_icon" class="menu_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>

            </nav>

        </header>
        `;
	}
}

customElements.define("nav-bar", NavBar);
