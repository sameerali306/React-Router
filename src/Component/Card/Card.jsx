import { Link } from "react-router-dom";

function Card({ user }) {
 
  return (
    <div className="w-48 m-5 p-4 bg-gray-200 rounded shadow">
      <h2 className="text-xl font-bold text-center">{user.name}</h2>
      <img className="  m-6 rounded-full w-30" src="./src/assets/image.jpg" alt="" />
      <Link to={`/profile/${user.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded ml-7">
          View Profile
 </button>
 </Link>
    </div>
  );
}

export default Card;


