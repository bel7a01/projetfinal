import matchStyle from './match.module.css'
const Match = ({ infos }) => {


    return (
        <div className={matchStyle.match}>
            <div className={matchStyle.dortmund}>
                <span>Dortmund</span>
                <img src="../src/assets/logodortmund.png" alt="logodortumund" />
            </div>
            <div className={matchStyle.info}>
                <div className={matchStyle.date}>Sat 1 Jun</div>
                <hr className={matchStyle.hr} />
                <div className={matchStyle.time}>21:00</div>
            </div>
            <div className={matchStyle.madrid}>
                <img src="../src/assets/logoreal.png" alt="logomadrid" />
                <span>Real Madrid</span>
            </div>
        </div >






    );
}

export default Match;