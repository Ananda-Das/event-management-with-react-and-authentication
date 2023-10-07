/* eslint-disable react/prop-types */

/*
    width: 35%;
    position: absolute;
    margin-top: 162px;
    margin-left: 7px;
*/

const EventCard = ({ event }) => {
  const { image, title, event_date, city, seats } = event;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <p className="text-white bg-[#ce1446] p-3 rounded-lg font-semibold text-xl w-[35%] absolute mt-[180px] ml-[7px]">{seats} Seat</p>
        <div className="card-body">
          <div className="flex justify-between items-center font-normal text-gray-600">
            <div>{event_date}</div>
            <div>{city}</div>
          </div>
          <h2 className="card-title text-xl font-semibold capitalize">{title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-end">
            <button className="btn text-[#ce1446] btn-outline  w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
