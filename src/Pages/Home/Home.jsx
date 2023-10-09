import Banner from "./Banner";
import EventCards from "./EventCards";
import Speakers from "./Speakers";
import Ticket from "./Ticket";


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <EventCards></EventCards>
            <Speakers></Speakers>
            <Ticket></Ticket>
        </div>
    );
};

export default Home;