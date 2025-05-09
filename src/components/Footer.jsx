const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div>
                <ul className="footer-icons">
                    <li>
                        <a href="https://mail.google.com/">
                            <img src="/img/footerIcons/square-envelope-solid.svg" alt="Email Icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://m.me/johnrey.cejas?hash=AbZ4lasNllbIuXDq&source=qr_link_share">
                            <img src="/img/footerIcons/facebook-messenger-brands.svg" alt="Messenger Icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Rexia0608">
                            <img src="/img/footerIcons/GitHub.svg" alt="GitHub Icon" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/john-rey-cejas-352716170/">
                            <img src="/img/footerIcons/linkedin-brands.svg" alt="LinkedIn Icon" />
                        </a>
                    </li>
                </ul>
                <p className="text-center text-light">
                    Designed & Developed <span className="text-info">by John Rey Gomez Cejas </span>
                    &copy; {year}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
