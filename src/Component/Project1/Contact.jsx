import React from "react";

function Contact() {
  return (
    <>
      <div className="w-full h-auto bg-gray-200">
        <div className="flex justify-center flex-col items-center">
          <h3 className="mt-20  font-light">Sameer Ali Kakakhail</h3>
          <h1 className="mt-3 font-light text-6xl tracking-widest">
            Contact Us
          </h1>
        </div>
        <div className="flex justify-around my-15">
          <div className="flex text-center flex-col">
            <h4 className="font-light">ONLINE INQUIRY</h4>
            <input
              className="w-100 h-13 bg-white rounded my-2 p-3 font-light"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-100 h-13 bg-white rounded my-2 p-3 font-light"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-100 h-13 bg-white rounded my-2 p-3 font-light"
              type="password"
              placeholder="Password"
            />
            <select
              className="w-full h-13 bg-white rounded my-2 p-3 font-light text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Select Interest
              </option>
              <option value="web">Web Development</option>
              <option value="design">UI/UX Design</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="marketing">Digital Marketing</option>
            </select>

            <input
              className="w-100 h-40 bg-white rounded my-1 p-3 font-light"
              type="text"
              placeholder="Massage"
            />
            <button className="bg-gray-500 font-light text-2xl m-5 rounded">Send</button>
          </div>
          <div className="flex text-center flex-col">
            <h4 className="font-light text-xl mb-8">Contact Details</h4>
            <p className="font-light ">Sameer@240xyzcompany@gmail.com</p>
            <p className=" mb-8">(109)-2489733-92928</p>
            <h4 className="font-bold">Jutial-Gilgit</h4>
            <p className="font-light mb-8">233-North-west-khomer <br />Jutial gilgit 240</p>
            <h4 className="font-bold">Summits</h4>
            <p className="font-light mb-8">357 Springfield Ave <br />Short hill NJ 007009</p>
            <h4 className="font-bold">Short-Hills Offfice</h4>
            <p className="font-light">549 Millburn Ave <br />Short hill NJ 007009</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
