import logo from './assets/logo.png';
import Nav from './Nav';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='logo' ></img>
            <Nav/>
        </header>
    );
}

export default Header;