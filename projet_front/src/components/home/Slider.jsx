import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image10 from '../../assets/image10.png';
import image11 from '../../assets/image11.png';
import Sliderstyle from './Slider.module.css';
import Slider from "react-slick";




function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 7000,
    cssEase: "linear"
  };

  return (
    <div className={Sliderstyle.Container5}>
      <div className={Sliderstyle.Container1}>
        <Slider {...settings}>
          {/* Slider items */}
          <div className={Sliderstyle.Container}>
            <img src={image1} className={Sliderstyle.Image} alt="" />
            {/* <div className={Sliderstyle.text}>Real vs Dortmund</div> */}
          </div>
          <div className={Sliderstyle.Container}>
            <img src={image2} className={Sliderstyle.Image} alt="" />
            <div className={Sliderstyle.text}>Dortmund appearing in 3rd ULC final</div>
          </div>
          <div className={Sliderstyle.Container}>
            <img src={image3} className={Sliderstyle.Image} alt="" />
            <div className={Sliderstyle.text}>Real Madrid contesting 18th showpiece</div>
          </div>
          <div className={Sliderstyle.Container}>
            <img src={image10} className={Sliderstyle.Image} alt="" />
            <div className={Sliderstyle.text}>Will BVB make it at Wembley?</div>
          </div>
          <div className={Sliderstyle.Container}>
            <img src={image11} className={Sliderstyle.Image} alt="" />
            <div className={Sliderstyle.text}>Or Real Madrid will make the 15th Chmpionsleague?</div>
          </div>

        </Slider>




      </div>
    </div>
  );
}

export default AutoPlay;