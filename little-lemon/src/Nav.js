import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav >
            <ul className='menubar'>
                <li><Link to='/'>HOME</Link></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#menu">MENU</a></li>
                <li><Link to='/booking'>RESERVATIONS</Link></li>
                <li><a href="#reserve">ORDERONLINE</a></li>
                <li><Link to='/loginpage'>LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;