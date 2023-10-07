import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import EventCards from "./EventCards";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <EventCards></EventCards>
            <Footer></Footer>
        </div>
    );
};

export default Home;