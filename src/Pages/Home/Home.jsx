import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import EventCards from "./EventCards";
import Speakers from "./Speakers";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <EventCards></EventCards>
            <Speakers></Speakers>
            <Footer></Footer>
        </div>
    );
};

export default Home;