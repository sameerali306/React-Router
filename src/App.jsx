// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./Component/Header";
// import Footer from "./Component/Footer";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Home from "./Component/Home";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} /> 
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
        
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';

// import { Routes, Route } from 'react-router-dom';
// import Card from './Component/Card/Card.jsx';
// import Profile from './Component/Card/Profile.jsx';

// function App(){

// const users = [
//   { id: 1, name: "Sameer Ali", details: "The Frontend Developer Sameer ali completer his 6 month course from Uconnect Skill Development in gilgit "  },
//   { id: 2, name: "Faria Hussain", details: "UI/UX Designer" },
//   { id: 3, name: "Faris", details: "BookKeeper" },
//   { id: 4, name: "Umair Ali", details: "Digital Marketer" },
// ];

// return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="flex flex-wrap">
//               {users.map((user) => (
//                 <Card key={user.id} user={user} />
//               ))}
//             </div>
//           }
//         />
//         <Route path="/profile/:id" element={<Profile users={users} />} />
//       </Routes>
//     </>
//   );

// }

// export default App;


// import React from 'react'
// import Card2 from './Component/Card2/Card2';
// import { Route, Routes } from 'react-router-dom';
// import Profile2 from './Component/Card2/Profile2.jsx';
// import Back from './Component/Card2/Back.jsx';

//  const Users=[
//   { id:1 ,name:"SAMEER ALY" , age:20 , Eduction:"Undergraduate" , Image:"/src/assets/image5.jpg" ,Email:"sameer@gmail.com" , detail:"Hi i am sameer aly a passinate web developer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have one and a half year of experience"},
//   {id:2 ,name:"FARIYA HUSSAIN" , age:18 , Eduction:"Matriculation" , Image:"/src/assets/image.jpg",Email:"faria@gmail.com", detail:"Hi i am fariya  hussain a passinate UIUX Desiginer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have one and a half year of experience.."},
//    { id:3 ,name:"FARIS ALI" , age:5 , Eduction:"Primary" , Image:"/src/assets/image3.jpg", Email:"faris@gmail.com",detail:"Hi i am faria aly a passinate digital marketer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have one and a half year of experience"},
//   {id:4 ,name:"UMAIR ALI" , age:8 , Eduction:"Intermediate" , Email:"umair@gmail.com",Image:"/src/assets/image4.jpg", detail:"Hi i am umair aly a passinate mobile App developer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have one and a half year of experience"},
//   { id:5 ,name:"UZAIR" , age:20 , Eduction:"graduate" , Image:"/src/assets/image5.jpg",Email:"uzair@gmail.com", detail:"Hi i am uzair a passinate software Engineer from gilgit pakistan has completed my graduation in soft engineering from KIU and now i have one and a half year of experience"},
//   {id:6 ,name:"SHAKEEL" , age:18 , Eduction:"Matriculation" , Image:"/src/assets/image2.jpg",Email:"shakeel@gmail.com", detail:"Hi i am Shakeel a passinate web developer from gilgit pakistan has complete 6 month course from Techoiz gilgit and now i have one and a half year of experience"},
//    { id:7 ,name:"SHAHZAIN" , age:25 , Eduction:"Primary" , Image:"/src/assets/image3.jpg",Email:"shahzain@gmail.com", detail:"Hi i am shahzain a passinate web developer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have one and a half year of experience"},
//   {id:8,name:"FARHAN" , age:18 , Eduction:"Intermediate" , Image:"/src/assets/image4.jpg",Email:"fahran@gmail.com", detail:"Hi i am farhan a Bookkeeper from gilgit pakistan has complete 6 month course from Ideomatrix and now i have one and a half year of experience"},
//   { id:9 ,name:"ALI" , age:20 , Eduction:"Undergraduate" , Image:"/src/assets/image5.jpg", Email:"Aly@gmail.com",detail:"Hi i am  aly a passinate Graphic Designer from karachi pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have four and a half year of experience"},
//   {id:10 ,name:"ASHIQ ALY" , age:26 , Eduction:"Intermediate" , Image:"/src/assets/image6.jpg", Email:"AlyAshiq@gmail.com",detail:"Hi i am Ashiq aly a Mobile App Developer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have 6 and a half year of experience"},
//    { id:11 ,name:"ALIZAIN" , age:14 , Eduction:"Primary" , Image:"/src/assets/image3.jpg", Email:"AliZain@gmail.com",detail:"Hi i am AALIZAIN a passinate web developer from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have one and a half year of experience"},
//   {id:12 ,name:"ZAYAN" , age:23 , Eduction:"Intermediate" , Image:"/src/assets/image4.jpg", Email:"zyn@gmail.com",detail:"Hi i am  Zayan a Data scientist  from gilgit pakistan has complete 6 month course from USDP(Uconnect skill development program) and now i have two and a half year of experience"},
// ]

// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path='/' 
//       element={<div className="flex flex-wrap">
//       {Users.filter(user=>user.age>10).map((user)=>(
//       <Card2 key={user.id} user={user}/>
//     ))}</div>}/>
//     <Route/>
//     <Route path='/profile/:id' element={<Profile2 sameer={Users}/>}/>
//     <Route path='/' element={<Back user={Users}/>}/>
//     </Routes>
    
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Navigation from './Component/Project1/Navigation';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Component/Project1/Home';
// import Prouct from './Component/Project1/Prouct';
// import Contact from './Component/Project1/Contact';
// import About from './Component/Project1/About';

// function App() {
//   return (
//     <>
//      <Navigation/>
     
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/product' element={<Prouct/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
    
//     </>
//   )
// }

// export default App


// import React from 'react'
import Password from './Component/Password/Password';

function App() {
  return (
    <Password/>
  )
}

export default App
