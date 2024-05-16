import { Link } from 'react-router-dom'
import './styles/footer.css'

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer>
            <div className="back-top" onClick={scrollToTop}>Back to Top</div>
            <div className="footer-container">
                <div className="footer-items">
                    <div className="footer-item">
                        <h5 className='item-header'>Company</h5>
                        <ul className='footer-links'>
                            <Link to={'/about'}>
                                <li className='footer-link'>
                                About Us
                                </li>
                            </Link>
                            <Link to={'/sell'}>                       
                                <li className='footer-link'>
                                Sell on Ecoyaan
                                </li>
                            </Link>
                            <Link to={'/careers'}>                       
                                <li className='footer-link'>
                                Careers
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h5 className='item-header'>Legal</h5>
                        <ul className='footer-links'>
                            <a href="/privacy">
                                <li className='footer-link'>
                                    Privacy Policy
                                </li>
                            </a>
                            <a href="/terms">
                                <li className='footer-link'>
                                    Terms of Use
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h5 className='item-header'>Follow Us</h5>
                        <ul className='footer-links'>
                            <a href="https://www.facebook.com">
                                <li className='footer-link'>
                                    Facebook
                                </li>
                            </a>
                            <a href="https://www.twitter.com">
                                <li className='footer-link'>
                                    Twitter
                                </li>
                            </a>
                            <a href="https://www.instagram.com">
                                <li className='footer-link'>
                                    Instagram
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="footer-subscribe">
                    <h3>
                    Subscribe to receive updates on blogs, future launches and more! 
                    </h3>
                    <input type="text" name="email" placeholder="Your Email Address" />
                    <p>
                        By subscribing, you agree to receive notifications
                        <a href="/privacy"> Privacy Policy</a>
                    </p>
                    <button className="button-green">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="divider"></div>
            <div className="footer-container">
                <div className="footer-items">
                    <div className="footer-item">
                        <h5 className='item-header'>Registered Address:</h5>
                        <span className='item-desc'>
                            1-N-12T-781/1 <br />
                            Sri Krishna Vilasa, <br />
                            Urvastores, <br />
                            Ashoknagar(MR), <br />
                            Mangalore, <br />
                            Dakshina Kannada- 575006, <br />
                            Karnataka, India <br />
                        </span>
                    </div>
                    <div className="footer-item">
                        <h5 className='item-header'>Legal Business Name:</h5>
                        <span className='item-desc'>
                            Kindkarma E-Retail Private Limited <br />
                            CIN: U47912KA2023PTC182592 <br />
                            Telephone: +91 9980490777
                        </span>
                    </div>
                </div>
            </div>
            <div className="blackbox">© 2023 - 2024, Ecoyaan TM</div>
        </footer>
    )
}
