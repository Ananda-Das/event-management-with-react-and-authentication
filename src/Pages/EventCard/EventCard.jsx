/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdOutlineEventSeat } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';

/*
    width: 35%;
    position: absolute;
    margin-top: 162px;
    margin-left: 7px;
    MdOutlineEventSeat
*/

const EventCard = ({ event }) => {
  const { id, image, title, event_date, city, seats } = event;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="flex">
         
        <p className="text-white bg-[#ce1446] p-3 rounded-lg font-semibold text-xl flex justify-between items-center w-[35%] absolute left-[7px] bottom-[148px]"> <MdOutlineEventSeat></MdOutlineEventSeat>
        {seats} 
         <span className="ml-[2px]">Seats</span></p>
        </div>
        <div className="card-body">
          <div className="flex justify-between items-center font-normal text-gray-600">
            <div className="flex items-center justify-between gap-1"> <BiCalendar></BiCalendar> {event_date}</div>
            <div className="flex justify-between items-center gap-1"><CiLocationOn></CiLocationOn>{city}</div>
          </div>
          <h2 className="card-title text-xl font-semibold capitalize">{title}</h2>

          <div className="card-actions w-full">
            <Link className="w-full" to={`event/${id}`}>
              <button className="btn text-[#ce1446] btn-outline  w-full font-bold">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
