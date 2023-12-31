import { useLoaderData } from "react-router-dom";
import EventCard from "./EventCard";



const Event = () => {
    const events = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
      <h2 className="text-5xl text-center mb-10 font-extrabold uppercase">Our <span className="text-[#ce1446]">Events</span></h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-5 ">
        {events.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
    );
};

export default Event;