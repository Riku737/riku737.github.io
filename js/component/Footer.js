class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <footer class="footer_section">
        
            <div class="footer_container">
                
                <!--Left foot-->
                <div class="left_foot">
                    <a href="${SITE_ROOT}#" class="logo_link">Riki McAlear</a>
                    <p class="heading_description_footer" id="heading_description_bg">Second-year software engineering student at the University of Ottawa, seeking Winter 2025 CO-OP.</p>
                    <p class="copyright_detail">© ${new Date().getFullYear()} Riki McAlear. All Rights Reserved.</p>
                </div>

                <!--Navigation foot-->
                <div class="nav_foot">

                    <!--Middle foot-->
                    <div class="middle_foot">
                        <ul class="foot_nav">
                            <li class="foot_list"><a href="${SITE_ROOT}#skills" class="foot_link">Skills</a></li>
                            <li class="foot_list"><a href="${SITE_ROOT}#projects" class="foot_link">Projects</a></li>
                            <li class="foot_list"><a href="${SITE_ROOT}#experience" class="foot_link">Experience</a></li>
                            <li class="foot_list"><a href="${SITE_ROOT}#about" class="foot_link">About</a></li>
                            <li class="foot_list"><a href="${SITE_ROOT}#contact" class="foot_link">Contact</a></li>
                        </ul>
                    </div>
                        
                    <!--Right foot-->
                    <div class="right_foot">
                        <ul class="foot_nav">
                            <li class="foot_list"><a href="" target="_blank" aria-label="Visit my GitHub profile" class="foot_link github_link"><i class="bi bi-github"></i>GitHub</a></li>
                            <li class="foot_list"><a href="" target="_blank" aria-label="Visit my LinkedIn profile" class="foot_link linkedin_link"><i class="bi bi-linkedin"></i>LinkedIn</a></li>
                            <li class="foot_list"><a href="" target="_blank" aria-label="Visit my BeHance profile" class="foot_link behance_link"><i class="bi bi-behance"></i>Behance</a></li>
                            <li class="foot_list"><a href="" target="_blank" aria-label="Send me an email" class="foot_link email_link"><i class="bi bi-envelope"></i>Email</a></li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
                
        </footer>
        `;
	}
}

customElements.define("footer-bar", Footer);
