import FootStyle from './Footer.module.css'
import Navbar from './Navbar';
const Footer = () => {
    return (
        <div className={FootStyle.container}>
            <Navbar></Navbar>
            <div className={FootStyle.img}><img src="../src/assets/london-2024.png" alt="" /></div>
        </div>

    );
}

export default Footer;