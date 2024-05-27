import Faq from '../components/home/Faq'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import Navbar from '../components/home/Navbar'
import WhoWilWin from '../components/home/WhoWillWin'
import Avis from '../components/home/Avis'
import Box from '../components/home/Box'
import Card from '../components/home/Card'
import Comment from '../components/home/Comment'
import Slider from '../components/home/Slider'
import HomeStyle from './home.module.css'
import image12 from '../assets/image12.png'
import image13 from '../assets/image13.png'
import image14 from '../assets/image14.png'
import image15 from '../assets/image15.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <>
            <div className={HomeStyle.top}>
                <Navbar></Navbar>
                <Header />
            </div>
            <div className={HomeStyle.mid}>
                <Slider></Slider>
                <Card></Card>
            </div>
            <div className={HomeStyle.know}>All you need to know:</div>
            <br></br>
            <br></br>
            <div className={HomeStyle.section2}>
                <Box source={image15} texte="Travel"></Box>
                <Box source={image12} texte="Wembley Stadium"></Box>
                <Box source={image13} texte="Dortmund"></Box>
                <Box source={image14} texte="Real Madrid"></Box>
            </div>
            <Faq ></Faq>
            <div className={HomeStyle.section3}>
                <Comment></Comment>
            </div>

            <WhoWilWin />
            <Footer></Footer>
            <ToastContainer></ToastContainer>



        </>

    );
}

export default Home;