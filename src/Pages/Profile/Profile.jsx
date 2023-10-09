import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto">
            <div className="overflow-x-auto">
            <h2 className="text-5xl text-center mt-10 mb-10 font-extrabold uppercase">
        Your <span className="text-[#ce1446]">Profile</span>
      </h2>
  <table className="table">
    {/* head */}
    {/* <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead> */}
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Your Name:</th>
        <td>{user.displayName}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>Your Email:</th>
        <td>{user.email}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>Photo:</th>
        <td><img className="btn btn-ghost btn-circle avatar w-14 rounded-full" src={user.photoURL} alt="" /></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Profile;