import React from 'react'
import { Link } from "react-router-dom";

function Back(user) {
    return (
        <div className="w-50 m-5 p-4 bg-gray-300 shadow rounded">
            <img src={user.Image} alt={user.name }
             className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
            />
            <h1 className='text-xl font-bold text-center'>{user.name}</h1>

            <Link to={`/profile/${user.id}`}>
            <button className='bg-blue-700 p-2 mx-8 my-3 rounded '>View More</button>
            </Link></div>
    )
}

export default Back
