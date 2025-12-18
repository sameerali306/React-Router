import React from 'react'

function Prouct() {
    return (
       <><div className="h-auto bg-gray-900 flex flex-col justify-center w-full text-center ">
        <h2 className='text-gray-400 font-bold text-xl '>Discover</h2>
        <h1 className='text-white font-bold text-5xl my-6'>Discover Our <br />Features</h1>
        <p className='text-white font-sans my-6'>Lorem20 ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem ipsam itaque quidem tempore voluptas exercitationem qui ullam? <br />Quod id fugit nobis placeat ex ut voluptatem. Ut blanditiis in eligendi. ipsum dolor sit amet consectetur, adipisicing elit. Dolore beatae odit reprehenderit blanditiis cum ipsam quaerat eaque nihil ea ducimus?</p>
       </div>
       <div className="flex  justify-evenly px-10 gap-2 py-5">
        <div className='p-5'>
            <i className="fas fa-sliders-h text-4xl text-black text-center pl-15 py-3"></i>
            <h1 className='mx-3 font-bold text-4xl py-5'>Efficient <br /> WorkFlow</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, voluptatum! ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab?</p>
        </div>
        <div><i className="fas fa-headset text-4xl text-black pl-15 py-3"></i>
            <h1 className='mx-3 font-bold text-4xl py-5'>Custamizable <br />options</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, exercitationem? ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab?</p>
            </div>
        <div><i className="fas fa-life-ring text-4xl pl-20 py-3"></i>
            <h1 className='mx-3 font-bold text-4xl py-5'>24/7 Support</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aliquam. ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab?</p>
            </div>
           
       </div>
        <button className='flex justify-center max-w-xl mx-auto bg-black text-white py-4 px-15 mb-15 rounded-xl'>Learn More</button>
       </>
    )
}

export default Prouct
