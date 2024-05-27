import WhoStyle from './WhoWillWin.module.css'
import { useState, useEffect } from 'react';
const WhoWilWin = () => {
    let [PredStyle, setPred] = useState('1fr 1fr 1fr')
    let styles = {
        display: "grid",
        gridTemplateColumns: PredStyle,
        columnGap: '0.7rem',
        width: '85%',
        height: '10%',
    }
    let [real, setreal] = useState('2');
    let [draw, SetDraw] = useState('X');
    let [dort, SetDort] = useState('1');
    let totReal = 20;
    let totDort = 60;
    let totDraw = 20;
    let tot = 100;
    let Realpour = 0;
    let DortPour = 0;
    let DrawPour = 0;

    const HandelClick = (e) => {
        let choice = e.target.value;
        switch (choice) {
            case '1': console.log('dort');
                totDort++;
                tot++;
                DortPour = Math.round((totDort / tot) * 100);
                Realpour = Math.round((totReal / tot) * 100);
                DrawPour = Math.round((totDraw / tot) * 100);
                SetDort(DortPour.toString() + '%');
                setreal(Realpour.toString() + '%');
                SetDraw(DrawPour.toString() + '%');
                setPred(`${DortPour / 100}fr ${DrawPour / 100}fr ${Realpour / 100}fr`);
                break;
            case '2': console.log('real');
                totReal++;
                tot++;
                Realpour = Math.round((totReal / tot) * 100);
                DrawPour = Math.round((totDraw / tot) * 100);
                DortPour = Math.round((totDort / tot) * 100);
                setreal(Realpour.toString() + '%');
                SetDraw(DrawPour.toString() + '%');
                SetDort(DortPour.toString() + '%');
                setPred(`${DortPour / 100}fr,${DrawPour / 100}fr,${Realpour / 100}fr`);
                setPred(`${DortPour / 100}fr ${DrawPour / 100}fr ${Realpour / 100}fr`);
                break;
            case 'X': console.log('draw');
                totDraw++;
                tot++;
                DrawPour = Math.round((totDraw / tot) * 100);
                DortPour = Math.round((totDort / tot) * 100);
                Realpour = Math.round((totReal / tot) * 100);
                SetDraw(DrawPour.toString() + '%');
                SetDort(DortPour.toString() + '%');
                setreal(Realpour.toString() + '%');
                setPred(`${DortPour / 100}fr,${DrawPour / 100}fr,${Realpour / 100}fr`);
                setPred(`${DortPour / 100}fr ${DrawPour / 100}fr ${Realpour / 100}fr`);
        }

    }

    return (
        <div className={WhoStyle.container} id='pred'>
            <div className={WhoStyle.title}> Who Will Win ?</div>
            <div style={styles} id='cont'>
                <button className={WhoStyle.dort} onClick={HandelClick} value={dort}><div>{dort} </div></button>
                <button className={WhoStyle.draw} onClick={HandelClick} value={draw}><div>{draw} </div></button>
                <button className={WhoStyle.real} onClick={HandelClick} value={real}><div>{real} </div></button>
            </div>
        </div>

    );
}

export default WhoWilWin;