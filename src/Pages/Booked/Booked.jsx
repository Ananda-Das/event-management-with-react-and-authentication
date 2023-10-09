const Booked = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <h2 className="text-5xl text-center mt-10 mb-10 font-extrabold uppercase">
          Your <span className="text-[#ce1446]">Booking</span>
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Place</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Tech Symposium 2023</td>
              <td>Dhaka, Bangladesh</td>
              <td>November 15-17, 2023</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Leadership Excellence Summit</td>
              <td>Chittagong, Bangladesh</td>
              <td>March 2, 2023</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Marketing Masterclass Series</td>
              <td>Khulna, Bangladesh</td>
              <td>January 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booked;
