import { useParams } from "react-router-dom";

function Profile({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return <h2>User not found</h2>;

  return (
    <div className="w-100 bg-red-300 p-4 m-5 rounded shadow">
      <div className="p-5">
       
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="mt-2 text-lg">{user.details}</p>
    </div>
    </div>
  );
}

export default Profile;

