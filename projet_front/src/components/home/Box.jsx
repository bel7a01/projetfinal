import style from './Box.module.css'



function Box(props) {
    return (
        <div className={style.container}>
            <img className={style.image} src={props.source}></img>
            <div className={style.text} >{props.texte}</div>

        </div>
    )

}
export default Box