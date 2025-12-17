import React from 'react'
import { useParams } from 'react-router-dom';
import {  Link} from 'react-router-dom';;

function Profile2({sameer}) {
    const { id } = useParams();
  const user = sameer.find((u) => u.id.toString() === id);

  if (!user) return <h2>User not found</h2>;
    return (
         <div className=" w-120  p-4 ml-80 mt-40 rounded shadow hover:bg-top-right cursor-pointer bg-teal-300">
      <div className="flex  ">
      <div className="p-5">
        
       <img src={user.Image} alt={user.name }
             className="w-30 h-30 rounded-full mx-auto mb-2 object-cover "
            />
      <p className="mt-2 text-lg text-center font-bold">Age :{user.age}</p>
       <p className="mt-2 text-lg font-semibold ">Eduction:{user.Eduction}</p>
      </div>
      <div className="font-sans text-center ">
        <h1 className="text-2xl font-bold text-center">{user.name}</h1>
        {user.detail}</div>
    </div>
    <p className="mt-2 text-lg text-center font-semibold text-gray-800">Email Address :{user.Email}</p>
    <Link to={"/"}>
    <button className='bg-blue-700 py-2 px-4 mx-45 my-3 text-cyan-50 rounded  hover:bg-transparent border-2'> Back</button>
    </Link>
    </div>
    )
}

export default Profile2
