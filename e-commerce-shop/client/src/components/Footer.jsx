import styles from './Footer.css?inline'

export default function Footer() {
    return (
        <div className="section-site-footer">
            <div className="section-top-bar">
                <div className="container">
                    <p className="phone"><i className="fa-solid fa-mobile-screen"></i>+359-52-123-123</p>
                    <p>All rights reserved © 2023 Recharge, Inc</p>
                    <ul className="socials">
                        <li><a href="#"><i className="fa-brands fa-square-facebook"></i><span>Facebook</span></a></li>
                        <li><a href="#"><i className="fa-brands fa-square-twitter"></i><span>Twitter</span></a></li>
                        <li><a href="#"><i className="fa-brands fa-square-instagram"></i><span>Instagram</span></a></li>
                        <li><a href="#"><i className="fa-brands fa-square-youtube"></i><span>YouTube</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};