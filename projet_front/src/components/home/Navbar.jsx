
import navbarStyle from './navbar.module.css'
import { Link } from 'react-router-dom'
import { HashLink as Link1 } from 'react-router-hash-link';


export const Navbar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={navbarStyle.nav}>
            <img src='../src/assets/logo1.png' alt="uefa logo" />
            <div className={navbarStyle.nav1}>
                <Link className={navbarStyle.p} to="/home"><p >Home</p></Link>
                <Link1 smooth className={navbarStyle.p} to='#faq'><p >FAQ</p></Link1>
                <Link1 className={navbarStyle.p} to='#pred' smooth><p>Predictions</p></Link1>
            </div>
            <Link to='/res'><button>book your seat !</button></Link>
        </div>
    );
};
export default Navbar;