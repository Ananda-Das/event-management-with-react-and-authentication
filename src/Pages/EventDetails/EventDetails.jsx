import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { MdOutlineEventSeat } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import BookEvent from "./BookEvent";

const EventDetails = () => {
  const event = useLoaderData();

  const { id } = useParams();

  const eventDetails = event.find((event) => event.id === id);

  const { title, image, event_date, city, seats, description, speakers } = eventDetails;

  return (
    <div>
      <Navbar></Navbar>
      {/* Event Details Start */}
      <div className="w-11/12 mx-auto mt-5">
        <h1 className="text-6xl font-extrabold uppercase text-center mb-5">Event Details</h1>
        <div className="grid grid-cols-3 gap-5 mt-7">
          <div className="col-span-2">
            <div className="w-full">
              <img className="w-full h-[400px]" src={image} alt="" />
              <div className="flex justify-around items-center font-normal text-gray-600 mt-4">
                <div className="flex items-center justify-between gap-1">
                  <BiCalendar></BiCalendar> {event_date}
                </div>
                <p className="text-[#ce1446] rounded-lg text-xl flex justify-between items-center font-bold">
                  <MdOutlineEventSeat></MdOutlineEventSeat>
                  {seats}
                  Seat
                </p>
                <div className="flex justify-between items-center gap-1">
                  <CiLocationOn></CiLocationOn>
                  {city}
                </div>
              </div>
              <hr className="w-full border" />
              <h1 className="text-4xl font-bold text-center text-[#ce1446] mt-5">{title}</h1>
              <p className="text-justify mt-3 text-xl">{description}</p>
              {/* spkers start */}
              <div>
                <h3 className="text-3xl font-semibold mt-4 text-center">Event Speakers 0{speakers.length} Person</h3>
                <div className="flex justify-between items-center gap-3 mt-5">
                  <div className="flex justify-between items-center gap-3">
                    {/* <img src={speakers[0].image} alt="" /> */}
                    <div>
                      <img src={speakers[0].image} alt="" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{speakers[0].name}</h4>
                      <h5 className="text-xl font-semibold">{speakers[0].position}</h5>
                      <div className="flex gap-3 text-xl mt-3">
                        <Link className="hover:text-[#ce1446]"><BsFacebook></BsFacebook></Link>
                        <Link className="hover:text-[#ce1446]"><BsInstagram></BsInstagram></Link>
                        <Link className="hover:text-[#ce1446]"><BsLinkedin></BsLinkedin></Link>
                        <Link className="hover:text-[#ce1446]"><BsTwitter></BsTwitter></Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <div>
                      <img src={speakers[1].image} alt="" />
                    </div>
                    <div>
                    <h4 className="text-2xl font-bold">{speakers[1].name}</h4>
                      <h5 className="text-xl font-semibold">{speakers[1].position}</h5>
                      <div className="flex gap-3 text-xl mt-3">
                        <Link className="hover:text-[#ce1446]"><BsFacebook></BsFacebook></Link>
                        <Link className="hover:text-[#ce1446]"><BsInstagram></BsInstagram></Link>
                        <Link className="hover:text-[#ce1446]"><BsLinkedin></BsLinkedin></Link>
                        <Link className="hover:text-[#ce1446]"><BsTwitter></BsTwitter></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* spkers end */}
            </div>
          </div>
          <div>
            <BookEvent></BookEvent>
          </div>
        </div>
      </div>
      {/* Event Details End */}
      <Footer></Footer>
    </div>
  );
};

export default EventDetails;