import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import EventCards from "./EventCards";
import Speakers from "./Speakers";
import Ticket from "./Ticket";


const Home = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <EventCards></EventCards>
            <Speakers></Speakers>
            <Ticket></Ticket>
            <Footer></Footer>
        </div>
    );
};

export default Home;