import style from './Avis.module.css'


function Avis(props) {
    return (
        <div className={style.container11}>
            <div className={style.container111}>@{props.user}</div>
            <div className={style.container1}>
                {props.text}
            </div>
        </div>
    )
}
export default Avis