import CountDown from './CountDown';
import headerStyle from './header.module.css'
import { useState, useEffect } from 'react';
import Match from './match'

const Header = () => {
    let diff = 5;
    let [info, setinfo] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            fetch("http://localhost:3000/info")
                .then(res => res.json())
                .then(data => {
                    setinfo(data);
                    setLoading(false); // Set loading to false after fetching data
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    setLoading(false); // Also set loading to false in case of error
                });
        }
    }, [loading]); // Empty dependency array ensures useEffect runs only once

    return (
        <div className={headerStyle.header}>
            <Match infos={info} />
            <CountDown duration={diff * 24 * 60 * 60 * 1000} infos={info} />
        </div>
    );
}

export default Header;