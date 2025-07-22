class Footer extends HTMLElement {
       connectedCallback() {
        this.innerHTML = `
        <footer class="footer_section">

            <div class="footer_container">

                <!--Left foot-->
                <div class="left_foot">
                    <a href="#" class="logo_link">Riki McAlear</a>
                    <p class="heading_description_footer" id="heading_description_bg">Software Engineering Student</p>
                </div>

                <!--Middle foot-->
                <div class="middle_foot">
                    <ul class="foot_nav">
                        <li class="foot_list"><a href="#skills" class="foot_link">Skills</a></li>
                        <li class="foot_list"><a href="#projects" class="foot_link">Projects</a></li>
                        <li class="foot_list"><a href="#experience" class="foot_link">Experience</a></li>
                        <li class="foot_list"><a href="#about" class="foot_link">About</a></li>
                        <li class="foot_list"><a href="#contact" class="foot_link">Contact</a></li>
                    </ul>
                </div>

                <!--Right foot-->
                <div class="right_foot">
                    <ul class="foot_nav">
                        <li class="foot_list"><a href="" target="_blank" class="foot_link github_link"><i class="bi bi-github"></i>GitHub</a></li>
                        <li class="foot_list"><a href="" target="_blank" class="foot_link linkedin_link"><i class="bi bi-linkedin"></i>LinkedIn</a></li>
                        <li class="foot_list"><a href="" target="_blank" class="foot_link behance_link"><i class="bi bi-behance"></i>Behance</a></li>
                        <li class="foot_list"><a href="" target="_blank" class="foot_link email_link"><i class="bi bi-envelope"></i>Email</a></li>
                    </ul>
                </div>

            </div>

        </footer>
        `;

    }
}

customElements.define('footer-bar', Footer);