import Style from './Card.module.css'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/image8.png'
import image9 from '../../assets/image9.png'




function Card() {
    return (
        <div className={Style.container}>
            <div className={Style.container2}>
                <h2>Team Information</h2>
                <p className={Style.text1}>Form Guide</p>
                <div className={Style.container3}>
                    <div className={Style.Dortmund}>
                        <img src={image5} className={Style.logo}></img>
                        <p className={Style.text2}> Dortmund</p>
                    </div>
                    <div className={Style.RealMadrid}>
                        <p className={Style.text2}> Real Madrid</p>
                        <img src={image6} className={Style.logo}></img>
                    </div>


                </div>
                <div className={Style.line}></div>
                <div className={Style.result}>
                    <div className={Style.team1}>
                        <img className={Style.image2} src={image7}></img>
                        <img className={Style.image2} src={image7}></img>
                        <img className={Style.image2} src={image7}></img>
                        <img className={Style.image2} src={image7}></img>
                    </div>
                    <div className={Style.team2}>

                        <img className={Style.image2} src={image7}></img>
                        <img className={Style.image2} src={image7}></img>
                        <img className={Style.image2} src={image7}></img>
                        <img className={Style.image2} src={image7}></img>
                    </div>

                </div>
                <p className={Style.text1}>Head to Head</p>
                <div className={Style.container3}>
                    <div className={Style.Dortmund}>
                        <img src={image5} className={Style.logo}></img>
                        <p className={Style.text2}> Dortmund</p>
                    </div>
                    <div className={Style.RealMadrid}>
                        <p className={Style.text2}> Real Madrid</p>
                        <img src={image6} className={Style.logo}></img>
                    </div>
                </div>
                <div className={Style.line}></div>

                <div className={Style.score}>
                    <div className={Style.res}>
                        <p className={Style.number}>3</p>
                        <p className={Style.tex}>Wins</p>
                    </div>
                    <div className={Style.res}>
                        <p className={Style.number}>5</p>
                        <p className={Style.tex}>Draws</p>
                    </div>
                    <div className={Style.res}>
                        <p className={Style.number}>3</p>
                        <p className={Style.tex}>Wins</p>
                    </div>



                </div>
            </div>




        </div>




    )
}
export default Card