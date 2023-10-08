import { BsBookmarkCheck } from "react-icons/bs";


const BookEvent = () => {
  return (
    <div className="shadow-lg p-3">
        <button className="flex items-center gap-5 text-2xl bg-[#ce1446] text-white font-bold p-3 rounded-lg">
            <BsBookmarkCheck></BsBookmarkCheck> <span>Book This Event</span>
        </button>
      <form className="card-body space-y-5">
        <div className="form-control">
          <input type="text" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Your Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ce1446] text-white hover:btn-outline">Submit Now</button>
        </div>
      </form>
    </div>
  );
};

export default BookEvent;
