import navadminStyle from './navadmin.module.css'
import { Link } from 'react-router-dom'
import { HashLink as Link1 } from 'react-router-hash-link';

export const NavAdmin = () => {
    return (
        <div className={navadminStyle.nav}>
            <img src='../src/assets/logo1.png' alt="uefa logo" />
            <div className={navadminStyle.nav1}>
                <Link to='/home' className={navadminStyle.p}> <p >Home</p></Link>
                <p className={navadminStyle.p}>Users</p>
                <p className={navadminStyle.p}>Comments</p>
                <p className={navadminStyle.p}>infos</p>

            </div>
        </div>
    );
};
export default NavAdmin;