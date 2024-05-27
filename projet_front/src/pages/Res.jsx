import Reservation from "./Reservation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/home/Navbar";
const Res = () => {
    return (
        <div style={{ backgroundColor: "#141464" }}>
            <Navbar></Navbar>
            <Reservation></Reservation>
            <ToastContainer></ToastContainer>

        </div>

    );
}

export default Res;