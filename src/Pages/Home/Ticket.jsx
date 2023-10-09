import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Ticket = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-14 w-11/12 mx-auto mb-14">
      <h2 className="text-5xl text-center mb-10 font-extrabold uppercase">
        GET SPONSOR <span className="text-[#ce1446]">TICKET</span>
      </h2>
      <div className="flex items-center justify-around gap-8">
        {/* card-start */}
        <div data-aos="fade-right" data-aos-duration="3000" className="shadow-xl w-80 text-center">
          <div className="bg-[rgb(206,20,70)] rounded-b-3xl p-5 text-2xl font-bold text-white">
            <h3 className="text-xl">Silver</h3>
            <p className="text-5xl">$ 100</p>
          </div>
          <div className="mt-5 py-5">
            <p className="text-[#2d373c] text-xl font-semibold">Available Tickets</p>
            <p className="font-bold text-2xl mt-3">
              270 / <span className="text-[#ce1446] text-3xl">500</span>
            </p>
            <div className="flex items-center justify-center">
              <div className="text-[#515154] text-xl font-medium mt-3 space-y-4">
                <li>Conference Ticket</li>
                <li>Free Certificate</li>
                <li>Free Lunch & Coffe</li>
              </div>
            </div>
            <div>
              <button className="btn bg-[#ce1446] text-white  my-4 w-[60%] font-bold text-xl">Buy Now</button>
            </div>
          </div>
        </div>
        {/* card-end */}

        {/* card-start */}
        <div data-aos="fade-up" data-aos-duration="3000" className="shadow-xl w-80 text-center">
          <div className="bg-[rgb(206,20,70)] rounded-b-3xl p-5 text-2xl font-bold text-white">
            <h3 className="text-xl">Gold</h3>
            <p className="text-5xl">$ 120</p>
          </div>
          <div className="mt-5 py-5">
            <p className="text-[#2d373c] text-xl font-semibold">Available Tickets</p>
            <p className="font-bold text-2xl mt-3">
              300 / <span className="text-[#ce1446] text-3xl">500</span>
            </p>
            <div className="flex items-center justify-center">
              <div className="text-[#515154] text-xl font-medium mt-3 space-y-4">
                <li>Conference Ticket</li>
                <li>Free Certificate</li>
                <li>Free Lunch & Coffe</li>
              </div>
            </div>
            <div>
              <button className="btn bg-[#ce1446] text-white  my-4 w-[60%] font-bold text-xl">Buy Now</button>
            </div>
          </div>
        </div>
        {/* card-end */}

        {/* card-start */}
        <div data-aos="fade-left" data-aos-duration="3000"  className="shadow-xl w-80 text-center">
          <div className="bg-[rgb(206,20,70)] rounded-b-3xl p-5 text-2xl font-bold text-white">
            <h3 className="text-xl">Platinum</h3>
            <p className="text-5xl">$ 150</p>
          </div>
          <div className="mt-5 py-5">
            <p className="text-[#2d373c] text-xl font-semibold">Available Tickets</p>
            <p className="font-bold text-2xl mt-3">
              383 / <span className="text-[#ce1446] text-3xl">500</span>
            </p>
            <div className="flex items-center justify-center">
              <div className="text-[#515154] text-xl font-medium mt-3 space-y-4">
                <li>Conference Ticket</li>
                <li>Free Certificate</li>
                <li>Free Lunch & Coffe</li>
              </div>
            </div>
            <div>
              <button className="btn bg-[#ce1446] text-white  my-4 w-[60%] font-bold text-xl">Buy Now</button>
            </div>
          </div>
        </div>
        {/* card-end */}
      </div>
    </div>
  );
};

export default Ticket;
