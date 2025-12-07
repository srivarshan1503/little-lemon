import logo from './assets/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt='logo'/>
            <div className="doormat-nav" >
                <h1>Doormat Navigation</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="footer-contact">
                <h1>Contact</h1>
                <ul>
                    <li>south street<br/>kingstown palace<br/>chicago</li>
                    <li>9087604224</li>
                    <li>littlelemon@gmail.com</li>
                    
                </ul>
            </div>
            <div className="media-links">
                <h1>Social Media Links</h1>
                <ul>
                    <li>littlelemon</li>
                    <li>littlelemon</li>
                    <li>littlelemon@gmail.com</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;