import CountStyle from './countdown.module.css'
import { useState, useEffect } from 'react';
const CountDown = ({ duration, infos }) => {
    const [time, setTime] = useState(duration)
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000)
    }, [time])
    const formatedTime = (time) => {
        let totSeconds = parseInt(Math.floor(time / 1000));
        let totMin = parseInt(Math.floor(totSeconds / 60));
        let totHours = parseInt(Math.floor(totMin / 60));
        let Days = parseInt(Math.floor(totHours / 24));

        let sec = parseInt(totSeconds % 60);
        let min = parseInt(totMin % 60);
        let hours = parseInt(totHours % 24);
        let T = [sec, min, hours, Days];
        return (T);
    }
    let FinalTime = formatedTime(time);
    return (

        <div className={CountStyle.timerContainer}>
            <div className={CountStyle.cont}>
                <span className={CountStyle.day}>{FinalTime[3]} </span>
                <span className={CountStyle.cont1}>days</span>
            </div>
            <div className={CountStyle.del}>:</div>
            <div className={CountStyle.cont}>
                <span className={CountStyle.day}>{FinalTime[2]}</span>
                <span className={CountStyle.cont1}>hours</span>
            </div>
            <div className={CountStyle.del}>:</div>
            <div className={CountStyle.cont}>
                <span className={CountStyle.day}>{FinalTime[1]}</span>
                <span className={CountStyle.cont1}>minutes</span>
            </div>
            <div className={CountStyle.del}>:</div>
            <div className={CountStyle.cont}>
                <span className={CountStyle.day}>{FinalTime[0]}</span>
                <span className={CountStyle.cont1}>seconds</span>
            </div>
        </div>


    );
}

export default CountDown;