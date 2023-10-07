import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import EventCards from "./EventCards";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <EventCards></EventCards>
        </div>
    );
};

export default Home;